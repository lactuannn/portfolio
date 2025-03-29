import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNitori from '../public/images/works/nitori_eyecatch.png' // Thumbnail for Nitori
import thumbEpass from '../public/images/works/epass_eyecatch.png' // Thumbnail for Epass
import thumbHealthBook from '../public/images/works/healthbook_eyecatch.png' // Thumbnail for Sổ sức khỏe điện tử
import thumbHealthBookDoctor from '../public/images/works/healthbook_doctor_eyecatch.png' // Thumbnail for Sổ sức khỏe điện tử bác sỹ

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      The projects I have participated in.
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="nitori" title="Nitori app" thumbnail={thumbNitori}>
            A furniture e-commerce app for iOS, providing a seamless shopping experience.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="epass" title="ePass" thumbnail={thumbEpass}>
            With ePass, customers can easily access information related to the travel history of the vehicles they have registered for the service.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="healthbook" title="Sổ sức khỏe điện tử" thumbnail={thumbHealthBook}>
          The application helps Vietnamese citizens manage their personal health information, proactively prevent diseases, and take care of their health.          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="healthbook-doctor" title="Sổ sức khỏe điện tử bác sỹ" thumbnail={thumbHealthBookDoctor}>
          The application is designed for doctors and healthcare workers, assisting in data collection, vaccination administration, and reducing congestion at vaccination sites.          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
