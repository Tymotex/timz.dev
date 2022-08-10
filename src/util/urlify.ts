export const urlify = (unencodedUrl: string) => {
    const encodedUrl = encodeURIComponent(unencodedUrl);
    encodedUrl.replace("?", "%3F");
    return encodedUrl;
};
