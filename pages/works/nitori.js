import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Nitori">
    <Container>
      <Title>
        Nitori App <Badge>2025</Badge>
      </Title>
      <p>
  Find furniture and home decor easily! Solve your coordination worries effortlessly.<br /><br />

  <strong>Perfect for those who:</strong><br />
  • Want to shop without carrying furniture around<br />
  • Need help coordinating interiors in one app<br />
  • Want to find the best home deals quickly<br />
  • Need storage solutions that fit their space<br />
  • Prefer bulk shopping for home essentials<br />
  • Struggle with interior design decisions<br />
  • Want to compare sofas and beds effortlessly<br />
  • Are preparing for a move or a new home<br />
  • Want to use image search to find perfect furniture<br /><br />

  <strong>Features:</strong><br />
  ✅ <strong>Nitori at Home</strong> – Get the latest news, deals, and interior design ideas.<br />
  ✅ <strong>Membership Card</strong> – Earn and use points for shopping.<br />
  ✅ <strong>In-Store Mode</strong> – Check stock, reviews, and order with a simple scan.<br />
  ✅ <strong>Favorites List</strong> – Save and manage your favorite items from online and in-store.<br />
  ✅ <strong>Smart Shopping Tools</strong> –<br />
  🔍 Search by Keyword or Category<br />
  📢 Receive News & Promotions<br />
  📸 Image Search for Similar Products<br />
  📏 Add Size & Notes to Images for Easy Planning
</p>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Swift, SwiftUI</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.nitori.co.jp/en/index.html" target="_blank">
            Nitori <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* App Store Banner */}
      <Box align="center" my={6}>
        <Link
          href="https://apps.apple.com/vn/app/%E3%83%8B%E3%83%88%E3%83%AA%E3%82%A2%E3%83%97%E3%83%AA-%E5%AE%B6%E5%85%B7-%E3%82%A4%E3%83%B3%E3%83%86%E3%83%AA%E3%82%A2%E3%81%AE%E6%AC%B2%E3%81%97%E3%81%84%E3%81%8C%E8%A6%8B%E3%81%A4%E3%81%8B%E3%82%8B/id814928018"
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
