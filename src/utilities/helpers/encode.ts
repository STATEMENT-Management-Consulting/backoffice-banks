type TEncodeString = {
  inputString: string;
  secretKey: string;
};

export function encodeString({ inputString, secretKey }: TEncodeString) {
  let encodedString = "";
  for (let i = 0; i < inputString.length; i++) {
    const utf16CodeUnit = inputString.charCodeAt(i);

    const secretKeyChar = secretKey.charCodeAt(i % secretKey.length);

    const encodedChar = utf16CodeUnit ^ secretKeyChar;

    encodedString += String.fromCharCode(encodedChar);
  }

  return btoa(encodedString);
}

type TEncodeStrings = {
  inputStrings: string[];
  secretKey: string;
};

export function encodeStrings({ inputStrings, secretKey }: TEncodeStrings) {
  return inputStrings.map((inputString) => {
    return encodeString({ inputString, secretKey });
  });
}
