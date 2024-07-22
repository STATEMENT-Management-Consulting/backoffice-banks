type TDecodeString = {
  encodedString: string;
  secretKey: string;
};

export function decodeString({ encodedString, secretKey }: TDecodeString) {
  const decodedString = atob(encodedString);
  let originalString = "";

  for (let i = 0; i < decodedString.length; i++) {
    const utf16CodeUnit = decodedString.charCodeAt(i);

    const secretKeyChar = secretKey.charCodeAt(i % secretKey.length);

    const originalChar = utf16CodeUnit ^ secretKeyChar;

    originalString += String.fromCharCode(originalChar);
  }

  return originalString;
}

type TDecodeStrings = {
  encodedStrings: string[];
  secretKey: string;
};

export function decodeStrings({ encodedStrings, secretKey }: TDecodeStrings) {
  return encodedStrings.map((encodedString) => {
    return decodeString({ encodedString, secretKey });
  });
}
