import { light } from '@/lib/theme';
import {
  Container,
  Img,
  Section,
  Tailwind,
  Text,
  Html,
  Head,
  Font,
  Body,
  Preview,
} from '@react-email/components';
import { CSSProperties } from 'react';

interface EmailTemplateProps {
  email?: string;
  name?: string;
  number?: string;
  message?: string;
}

const EXAMPLE = {
  email: 'JohnDoe@testing.com',
  name: 'John Doe',
  number: '+55 91 91234578',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tristique leo vitae congue. Aliquam sodales rutrum sapien,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tristique leo vitae congue. Aliquam sodales rutrum sapien,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tristique leo vitae congue. Aliquam sodales rutrum sapien,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tristique leo vitae congue. Aliquam sodales rutrum sapien,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tristique leo vitae congue. Aliquam sodales rutrum sapien,',
};
export default function EmailTemplate({
  email = EXAMPLE.email,
  message = EXAMPLE.message,
  name = EXAMPLE.name,
  number = EXAMPLE.number,
}: EmailTemplateProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: light.colors,
            fontFamily: light.fontFamily,
          },
        },
      }}
    >
      <Html>
        <Head>
          <Font
            fontFamily='Poppins'
            webFont={{
              url: 'https://fonts.google.com/share?selection.family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900',
              format: 'truetype',
            }}
            fontStyle='normal'
            fallbackFontFamily={'sans-serif'}
          />
          <Font
            fontFamily='Roboto'
            webFont={{
              url: 'https://fonts.google.com/selection',
              format: 'truetype',
            }}
            fontStyle='normal'
            fallbackFontFamily={'sans-serif'}
          />
        </Head>
        <Preview>Nova mensagem chegou!</Preview>
        <Body style={STYLES.BODY}>
          <Container
            style={{ ...STYLES.HEADER, margin: 'auto' }}
            align='center'
          >
            <Text style={STYLES.TEXT}>Contato Com Adler</Text>
          </Container>
          <Container style={STYLES.CONTAINER} align='center'>
            <Section style={STYLES.TOPCHY}>
              <Text style={STYLES.TITLE}>Email</Text>
              <Text style={STYLES.TEXT}>{email}</Text>
            </Section>
            <Section style={STYLES.TOPCHY}>
              <Text style={STYLES.TITLE}>Nome</Text>
              <Text style={STYLES.TEXT}>{name}</Text>
            </Section>
            <Section style={STYLES.TOPCHY}>
              <Text style={STYLES.TITLE}>Número</Text>
              <Text style={STYLES.TEXT}>{number}</Text>
            </Section>
            <Section style={{ ...STYLES.TOPCHY, marginBottom: '0px' }}>
              <Text style={STYLES.TITLE}>Mensagem</Text>
              <Text style={STYLES.TEXT}>{message}</Text>
            </Section>
          </Container>
          <Container style={STYLES.FOOTER}>
            <Section style={STYLES.TOPCHY_FOOTER} align='center'>
              <Text style={{ ...STYLES.TEXT, fontSize: '12px' }}>
                2025 © Adler Castro. Todos direitos reservados.
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

interface StylesProps {
  BODY: CSSProperties;
  HEADER: CSSProperties;
  CONTAINER: CSSProperties;
  TOPCHY: CSSProperties;
  TITLE: CSSProperties;
  TEXT: CSSProperties;
  FOOTER: CSSProperties;
  TOPCHY_FOOTER: CSSProperties;
}

const STYLES: StylesProps = {
  BODY: {
    margin: '0px',
    padding: '0px',
  },
  HEADER: {
    backgroundColor: '#4c4c4c',
    borderBottom: '10px solid #f6e67a',
    padding: '20px 0px 20px 0px',
    marginBlock: 'auto',
    textAlign: 'center',
    color: 'white',
  },
  CONTAINER: {
    padding: '30px',
    boxShadow: ' 0px 0px 6.6px 0px rgba(0, 0, 0, 0.67) inset',
  },
  TOPCHY: {
    marginBottom: '46px',
    color: 'black',
  },
  TITLE: {
    margin: '0px',
    padding: '0px',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: `Copperplate, sans-serif`,
  },
  TEXT: {
    margin: '0px',
    padding: '0px',
    fontSize: '16px',
    fontWeight: 'normal',
    fontFamily: `Roboto, sans-serif`,
  },
  FOOTER: {
    margin: 'auto',
    height: '125px',
    backgroundColor: '#4c4c4c',
    borderTop: '10px solid #f6e67a',
    color: 'white',
  },
  TOPCHY_FOOTER: {
    textAlign: 'center',
    marginBlock: 'auto',
    fontFamily: `Roboto, sans-serif`,
    letterSpacing: '1.56px',
  },
};
