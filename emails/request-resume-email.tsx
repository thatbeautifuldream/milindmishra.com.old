import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface RequestResumeEmailProps {
  name: string;
}

const resumeLink =
  "https://docs.google.com/document/d/1ujYf9MIOEeH3UpaHKZmXm_9-W6XpSQ5LAcLUv0ue32k/preview";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const RequestResumeEmail = ({ name }: RequestResumeEmailProps) => (
  <Html>
    <Head />
    <Preview>Milind&apos;s Resume.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/sign.png`}
          width={150}
          height={150}
          alt="Milind Mishra"
        />
        <Heading style={heading}>
          Hi {name}, here&apos;s your requested resume.
        </Heading>
        <Section style={body}>
          <Text style={paragraph}>
            <Link style={link} href={resumeLink}>
              👉 Click here to view resume 👈
            </Link>
          </Text>
          <Text style={paragraph}>
            If you didn&apos;t request this, please ignore this email.
          </Text>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          Milind Mishra
        </Text>
        <Hr style={hr} />
        <Img
          src={`${baseUrl}/static/sign.png`}
          width={100}
          height={100}
          style={{
            WebkitFilter: "grayscale(100%)",
            filter: "grayscale(100%)",
            margin: "20px 0",
          }}
        />
        <Text style={footer}>
          <Link style={link} href="https://milindmishra.com">
            milindmishra.com
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

RequestResumeEmail.PreviewProps = {
  name: "Jhon Doe",
} as RequestResumeEmailProps;

export default RequestResumeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const link = {
  color: "#FF6363",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};
