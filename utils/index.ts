export const formatPhoneNumber = (phoneNumber: string): string => {
  return `(${phoneNumber.substring(0, 4)}) ${phoneNumber.substring(
    4,
    7
  )}-${phoneNumber.substring(7)}`;
};

