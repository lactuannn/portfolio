import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Box,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ePass">
    <Container>
      <Title>
        ePass <Badge>2025</Badge>
      </Title>
      <p>
With ePass, customers can easily access detailed information about the travel history of the vehicles they have registered for the service.
</p>

<p>
ePass offers a new experience for customers when traveling in Vietnam:
</p>

<p><strong>TRANSPARENCY</strong></p>
<p>
All vehicle-related information is fully updated on the smart application, ensuring transparency in toll station passages, transaction history, and service payments.
</p>

<p><strong>SIMPLE EXPERIENCE</strong></p>
<p>
The ePass automatic toll collection service is designed to provide a simple, accessible, and user-friendly experience. It ensures seamless usage by optimizing support services and expanding sales channels nationwide.
</p>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://giaothongso.com.vn/" target="_blank">
            ePass <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS/Android</span>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        <Link
          href="https://apps.apple.com/vn/app/epass/id1535426844"
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