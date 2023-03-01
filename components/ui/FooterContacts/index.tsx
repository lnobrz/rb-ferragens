import { ContactsContainer } from "./styles";
import FooterContact from "../FooterContact";
import { contacts } from "@/storage/data";

const FooterContacts = () => {
  return (
    <ContactsContainer>
      {contacts.map((contact) => {
        return (
          <FooterContact
            key={contact.id}
            contactType={contact.name}
            contact={contact.info}
          />
        );
      })}
    </ContactsContainer>
  );
};

export default FooterContacts;
