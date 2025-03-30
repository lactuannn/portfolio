import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Grid,
  useColorModeValue,
  VStack,
  Flex,
  Badge
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import Layout from '../components/layouts/article'
import Section from '../components/section'

// Thumbnails
import thumbNitori from '../public/images/works/nitori_eyecatch.png'
import thumbEpass from '../public/images/works/epass_eyecatch.png'
import thumbHealthBook from '../public/images/works/healthbook_eyecatch.png'
import thumbHealthBookDoctor from '../public/images/works/healthbook_doctor_eyecatch.png'

const Works = () => {
  const headingColor = useColorModeValue('teal.500', 'teal.300')
  
  // Project data
  const projects = [
    {
      id: 'nitori',
      title: 'Nitori App',
      thumbnail: thumbNitori,
      description: 'A sophisticated furniture e-commerce app for iOS, providing customers with a seamless and intuitive shopping experience.',
      tags: ['iOS', 'E-commerce', 'Mobile']
    },
    {
      id: 'epass',
      title: 'ePass',
      thumbnail: thumbEpass,
      description: 'A travel management platform enabling customers to easily access and track vehicle travel history and related services.',
      tags: ['Mobile', 'Transportation', 'iOS']
    },
    {
      id: 'healthbook',
      title: 'Sổ sức khỏe điện tử',
      thumbnail: thumbHealthBook,
      description: 'An essential health management application helping Vietnamese citizens monitor personal health information, prevent diseases, and maintain overall wellbeing.',
      tags: ['Healthcare', 'Mobile', 'Patient']
    },
    {
      id: 'healthbook-doctor',
      title: 'Sổ sức khỏe điện tử bác sỹ',
      thumbnail: thumbHealthBookDoctor,
      description: 'A specialized application for healthcare professionals that streamlines data collection, vaccination administration, and reduces congestion at medical facilities.',
      tags: ['Healthcare', 'Professional', 'Management']
    }
  ]
  
  return (
    <Layout title="Works">
      <Box
        minH="100vh"
        pt={20}
        pb={16}
      >
        <Container maxW="container.xl">
          <VStack spacing={16} align="stretch">
            {/* Header Section */}
            <VStack spacing={4} textAlign="center">
              <Heading 
                as="h1" 
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} 
                fontWeight="bold"
                bgGradient="linear(to-r, teal.400, cyan.500, blue.600)"
                bgClip="text"
                letterSpacing="tight"
              >
                Portfolio
              </Heading>
              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                opacity={0.8}
                maxW="3xl"
                px={4}
              >
                Showcasing projects I've contributed to with passion and expertise
              </Text>
            </VStack>

            {/* Projects Grid */}
            <Grid 
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={10}
            >
              {projects.map(project => (
                <Section key={project.id}>
                  <ProjectCell {...project} />
                </Section>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Box>
    </Layout>
  )
}

const ProjectCell = ({ id, title, thumbnail, description, tags = [], category = 'works' }) => {
  const cellBg = useColorModeValue('white', 'gray.800')
  const headingColor = useColorModeValue('teal.600', 'teal.300')
  const textColor = useColorModeValue('gray.700', 'gray.300')
  
  return (
    <Box 
      position="relative"
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="xl"
      transition="all 0.4s ease"
      height="100%"
      bg={cellBg}
      _hover={{ 
        transform: 'translateY(-8px)', 
        boxShadow: 'dark-lg'
      }}
    >
      {/* Image Section */}
      <Box position="relative" width="100%" height="220px">
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          quality={95}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
      
      {/* Content Section */}
      <Box p={6}>
        <Heading 
          as="h3" 
          fontSize="2xl" 
          fontWeight="bold"
          color={headingColor}
          mb={3}
        >
          {title}
        </Heading>
        
        {/* Tags */}
        <Flex mb={4} flexWrap="wrap" gap={2}>
          {tags.map(tag => (
            <Badge 
              key={tag} 
              colorScheme="teal" 
              px={2} 
              py={1}
              borderRadius="md"
            >
              {tag}
            </Badge>
          ))}
        </Flex>
        
        <Text 
          fontSize="md" 
          color={textColor}
          mb={5}
          lineHeight="tall"
        >
          {description}
        </Text>
        
        {/* View Details Link */}
        <NextLink href={`/${category}/${id}`} passHref legacyBehavior>
          <Box
            as="a"
            display="inline-block"
            bg="teal.500"
            color="white"
            px={4}
            py={2}
            borderRadius="md"
            fontWeight="medium"
            _hover={{ bg: 'teal.600', textDecoration: 'none' }}
            transition="all 0.3s ease"
          >
            View Details
          </Box>
        </NextLink>
      </Box>
    </Box>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'