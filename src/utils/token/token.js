export class WebToken {

    /** 
     * @private
     * @type { string }
     */
    SECRET_KEY = "M3iMzpJ9VGkQ39n1o2v8MYl7DXPKhdcz";


    /** 
     * @private
     */
    async calculateHMAC(key, data) {
        const encoder = new TextEncoder();
        const dataBytes = encoder.encode(data);
        const keyBytes = encoder.encode(key);
        return window.crypto.subtle.importKey('raw', keyBytes, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
            .then((key) => window.crypto.subtle.sign('HMAC', key, dataBytes))
            .then((signature) => new Uint8Array(signature));
    }

    async jwtEncode(token) {
        const date = new Date()
        const days = 30;
        date.setDate(date.getDate() + days);
        token.exp = date;
        const header = { alg: 'HS256', typ: 'JWT' };
        const encodedHeader = btoa(JSON.stringify(header));
        const encodedPayload = btoa(JSON.stringify(token));
        const headerPayload = encodedHeader + '.' + encodedPayload;

        return await this.calculateHMAC(this.SECRET_KEY, headerPayload)
            .then((signature) => {
                const encodedSignature = Array.from(new Uint8Array(signature), (byte) => String.fromCharCode(byte)).join('');
                return headerPayload + '.' + encodedSignature;
            });
    }


    async jwtDecode(token) {
        const [encodedHeader, encodedPayload, encodedSignature] = token.split('.');

        const headerPayload = encodedHeader + '.' + encodedPayload;
        const receivedSignature = new Uint8Array(Array.from(encodedSignature, (char) => char.charCodeAt(0)));

        return await this.calculateHMAC(this.SECRET_KEY, headerPayload)
            .then((signature) => {
                const validSignature = new Uint8Array(signature);

                const signatureIsValid = JSON.stringify(validSignature) === JSON.stringify(receivedSignature);

                if (signatureIsValid) {
                    return JSON.parse(atob(encodedPayload));
                } else {
                    throw new Error('Token inválido');
                }
            });
    }

}
