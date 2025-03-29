import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Sổ sức khỏe điện tử">
    <Container>
      <Title>
        Sổ sức khỏe điện tử <Badge>2025</Badge>
      </Title>
      <p>
The Electronic Health Book application is an app on the Ministry of Health's electronic platform that helps Vietnamese citizens know and manage their personal health information. It enables proactive disease prevention and self-care.
</p>

<p>
With the Electronic Health Book app, each citizen will have a lifetime health record directly connected to the Ministry of Health's Personal Health Record System, making it easier for healthcare professionals to diagnose and treat patients, providing comprehensive and continuous healthcare. It helps detect diseases early and treat them promptly when they are in the early stages, leading to higher treatment effectiveness, reducing medical costs for each individual.
</p>

<p>
The Electronic Health Book app assists healthcare workers in collecting information, reducing congestion at vaccination sites, minimizing the risk of infection when citizens go for COVID-19 vaccinations, and providing timely health support for the people.
</p>

<p>
With the Electronic Health Book app, each Vietnamese citizen who has been vaccinated with the COVID-19 vaccine will receive a digital "Vaccination Certificate" via QR code, along with the official COVID-19 vaccination certificate as required by the Ministry of Health.
</p>

<p>
The Electronic Health Book app has the following main features:
</p>
<ul>
  <li><strong>Vaccination Registration:</strong> Register for the COVID-19 vaccine.</li>
  <li><strong>Vaccination Confirmation:</strong> Provide information on whether the user agrees to get vaccinated for COVID-19.</li>
  <li><strong>Post-Vaccination Reactions:</strong> Provide health information about any symptoms that occur after receiving the COVID-19 vaccine.</li>
  <li><strong>Vaccination Certificate:</strong> Certifies that the user has received the COVID-19 vaccine.</li>
  <li><strong>Appointment Booking:</strong> Book appointments at healthcare facilities.</li>
  <li><strong>Health Records:</strong> Personal health record information.</li>
</ul>

<p>
The application is applied in Vietnam.
</p>


      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
      </List>

      {/* App Store Banner */}
      <Box align="center" my={6}>
        <Link
          href="https://apps.apple.com/vn/app/s%E1%BB%95-s%E1%BB%A9c-kh%E1%BB%8Fe-%C4%91i%E1%BB%87n-t%E1%BB%AD/id1555911794"
          target="_blank"
        >
          <Image
            src="/images/works/appstore.png"
            alt="Download on the App Store"
            width="200px"
          />
        </Link>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'