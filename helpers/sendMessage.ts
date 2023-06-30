const sendMessage = (clientName: string, text: string) => {
  const number = "+5585997271762";
  const textMessage = clientName.toUpperCase().concat(`: \n ${text}`);

  window.open(
    `https://api.whatsapp.com/send?phone=${number}&text=${textMessage}`
  );
};

export default sendMessage;
