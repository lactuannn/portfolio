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
  <Layout title="Sổ sức khỏe điện tử bác sỹ">
    <Container>
      <Title>
        Sổ sức khỏe điện tử bác sỹ <Badge>2025</Badge>
      </Title>
      <p>
The Electronic Health Book for Doctors application is an electronic platform developed by the Ministry of Health of Vietnam, designed for healthcare professionals and doctors to collect information, administer vaccinations, reduce congestion at vaccination sites, and minimize the risk of infection for citizens receiving COVID-19 vaccinations. It also provides timely health support for the public.
</p>

<p>
The application facilitates healthcare professionals in diagnosing and treating patients, ensuring comprehensive and continuous healthcare. It helps detect diseases early and provide timely treatment at an early stage, leading to higher treatment effectiveness and reducing medical examination and treatment costs for individuals.
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
          href="https://apps.apple.com/vn/app/s%E1%BB%95-s%E1%BB%A9c-kho%E1%BA%BB-%C4%91i%E1%BB%87n-t%E1%BB%AD-b%C3%A1c-s%E1%BB%B9/id1555917964"
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