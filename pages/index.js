import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoWebComponent } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import {Flex } from '@chakra-ui/react';

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an iOS developer based in Vietnam!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
          Tuan Do Lac
          </Heading>
          <p>Senior iOS Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/avatar.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
      <Section 
  delay={0.3} 
  className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg p-6 mb-8"
>
  <Heading 
    as="h3" 
    variant="section-title" 
    className="text-2xl font-bold mb-4 pb-2 border-b-2 border-indigo-500 inline-block"
  >
    Bio
  </Heading>
  
  <div className="flex flex-col md:flex-row items-start gap-6">
    <div className="md:w-3/4">
      <Paragraph className="text-lg leading-relaxed mb-4">
        Tuan is a Senior iOS Developer with over six years of experience crafting
        high-performance, user-friendly mobile applications. Passionate about building
        intuitive digital experiences, he specializes in native iOS development using
        Swift and SwiftUI. He enjoys optimizing app performance, refining UI/UX, and
        solving complex problems with clean, efficient code.
      </Paragraph>
      
      <Paragraph className="text-lg leading-relaxed">
        Currently, he is leading a team at{' '}
        <Link 
          as={NextLink} 
          href="https://www.fpt-software.com/" 
          passHref 
          target="_blank"
          className="text-indigo-600 font-medium hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
        >
          FPT Software
        </Link>, working on large-scale e-commerce apps with millions of users.
      </Paragraph>
    </div>
    
    {/* <div className="hidden md:block relative w-1/4 h-32">
      <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>
    </div> */}
  </div>

  <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            The projects that I have participated in
          </Button>
        </Box>
  
  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-20 z-0"></div>
</Section>

      {/* </Section> */}

      <Section delay={0.2}>
  <Heading as="h3" variant="section-title">
    Experience
  </Heading>
  
  <Box mb={6} position="relative">
    {/* Timeline line */}
    <Box 
      position="absolute"
      left="15px"
      top="0"
      bottom="0"
      width="2px"
      bg="gray.700"
      zIndex={0}
    />
    
    {/* FPT Software */}
    <Box 
      position="relative"
      mb={10}
      pl={10}
    >
      <Box 
        position="absolute" 
        left="0" 
        top="3px" 
        w="8" 
        h="8" 
        borderRadius="full" 
        bg="teal.400" 
        borderWidth={3}
        borderColor={useColorModeValue('gray.800', 'gray.800')}
        zIndex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box as="span" color="white" fontWeight="bold" fontSize="xs">1</Box>
      </Box>
      
      <Box 
        p={5} 
        bg={useColorModeValue('gray.900', 'gray.900')} 
        borderRadius="lg"
        shadow="xl"
        borderLeft="4px solid"
        borderColor="teal.400"
        transition="all 0.3s"
        _hover={{ transform: 'translateX(3px)', shadow: 'lg' }}
        overflow="hidden"
        position="relative"
      >
        {/* Subtle background pattern */}
        <Box 
          position="absolute" 
          top="0" 
          right="0" 
          opacity="0.05" 
          width="150px" 
          height="150px"
          borderRadius="full"
          bg="teal.400"
          transform="translate(50px, -50px)"
        />
        
        <Text fontSize="sm" color="gray.400" mb={1}>
          Oct 2022 - Present
        </Text>
        <Text fontWeight="bold" color="teal.400" fontSize="xl" mb={2}>
          FPT Software
        </Text>
        <Text fontWeight="medium" color="gray.300" fontSize="md" mb={3}>Senior iOS Developer, Team Lead</Text>
        
        <Box>
          <Text fontSize="sm" color="gray.400" display="flex" alignItems="start" mb={2}>
            <Box as="span" color="teal.400" mr={2}>•</Box>
            Led development of large-scale e-commerce apps with millions of users
          </Text>
          <Text fontSize="sm" color="gray.400" display="flex" alignItems="start" mb={2}>
            <Box as="span" color="teal.400" mr={2}>•</Box>
            Architected and implemented complex UI features using SwiftUI and UIKit
          </Text>
          <Text fontSize="sm" color="gray.400" display="flex" alignItems="start" mb={2}>
            <Box as="span" color="teal.400" mr={2}>•</Box>
            Optimized app performance and reduced loading times by 40%
          </Text>
          <Text fontSize="sm" color="gray.400" display="flex" alignItems="start">
            <Box as="span" color="teal.400" mr={2}>•</Box>
            Mentored junior developers and led code reviews for team projects
          </Text>
        </Box>
        
        <Flex mt={4} mb={1} justifyContent="space-between" alignItems="center">
          <Text fontSize="xs" color="gray.500">Technologies:</Text>
          <Text fontSize="xs" color="gray.500">3+ years</Text>
        </Flex>
        
        <Box mt={1} display="flex" flexWrap="wrap" gap={2}>
          <Box px={2} py={1} bg="gray.800" color="teal.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="teal.700">
            SwiftUI
          </Box>
          <Box px={2} py={1} bg="gray.800" color="teal.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="teal.700">
            UIKit
          </Box>
          <Box px={2} py={1} bg="gray.800" color="teal.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="teal.700">
            CI/CD
          </Box>
          <Box px={2} py={1} bg="gray.800" color="teal.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="teal.700">
            Combine
          </Box>
        </Box>
      </Box>
    </Box>
    
    {/* ITSOL */}
    <Box 
      position="relative"
      mb={10}
      pl={10}
    >
      <Box 
        position="absolute" 
        left="0" 
        top="3px" 
        w="8" 
        h="8" 
        borderRadius="full" 
        bg="blue.400"
        borderWidth={3}
        borderColor={useColorModeValue('gray.800', 'gray.800')}
        zIndex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box as="span" color="white" fontWeight="bold" fontSize="xs">2</Box>
      </Box>
      
      <Box 
        p={5} 
        bg={useColorModeValue('gray.900', 'gray.900')} 
        borderRadius="lg"
        shadow="xl"
        borderLeft="4px solid"
        borderColor="blue.400"
        transition="all 0.3s"
        _hover={{ transform: 'translateX(3px)', shadow: 'lg' }}
        overflow="hidden"
        position="relative"
      >
        {/* Subtle background pattern */}
        <Box 
          position="absolute" 
          top="0" 
          right="0" 
          opacity="0.05" 
          width="150px" 
          height="150px"
          borderRadius="full"
          bg="blue.400"
          transform="translate(50px, -50px)"
        />
        
        <Text fontSize="sm" color="gray.400" mb={1}>
          Oct 2019 - Sep 2022
        </Text>
        <Text fontWeight="bold" color="blue.400" fontSize="xl" mb={2}>
          ITSOL
        </Text>
        <Text fontWeight="medium" color="gray.300" fontSize="md" mb={3}>iOS Developer</Text>
        
        <Box>
          <Text fontSize="sm" color="gray.400" display="flex" alignItems="start" mb={2}>
            <Box as="span" color="blue.400" mr={2}>•</Box>
            Developed and maintained multiple iOS applications for diverse clients
          </Text>
          <Text fontSize="sm" color="gray.400" display="flex" alignItems="start" mb={2}>
            <Box as="span" color="blue.400" mr={2}>•</Box>
            Implemented responsive UI designs and complex user interactions
          </Text>
          <Text fontSize="sm" color="gray.400" display="flex" alignItems="start">
            <Box as="span" color="blue.400" mr={2}>•</Box>
            Collaborated with cross-functional teams to deliver high-quality products
          </Text>
        </Box>
        
        <Flex mt={4} mb={1} justifyContent="space-between" alignItems="center">
          <Text fontSize="xs" color="gray.500">Technologies:</Text>
          <Text fontSize="xs" color="gray.500">3 years</Text>
        </Flex>
        
        <Box mt={1} display="flex" flexWrap="wrap" gap={2}>
          <Box px={2} py={1} bg="gray.800" color="blue.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="blue.700">
            Swift
          </Box>
          <Box px={2} py={1} bg="gray.800" color="blue.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="blue.700">
            CoreData
          </Box>
          <Box px={2} py={1} bg="gray.800" color="blue.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="blue.700">
            Firebase
          </Box>
          <Box px={2} py={1} bg="gray.800" color="blue.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="blue.700">
            REST API
          </Box>
        </Box>
      </Box>
    </Box>
    
    {/* Smart Media */}
    <Box 
      position="relative"
      mb={4}
      pl={10}
    >
      <Box 
        position="absolute" 
        left="0" 
        top="3px" 
        w="8" 
        h="8" 
        borderRadius="full" 
        bg="purple.400"
        borderWidth={3}
        borderColor={useColorModeValue('gray.800', 'gray.800')}
        zIndex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box as="span" color="white" fontWeight="bold" fontSize="xs">3</Box>
      </Box>
      
      <Box 
        p={5} 
        bg={useColorModeValue('gray.900', 'gray.900')} 
        borderRadius="lg"
        shadow="xl"
        borderLeft="4px solid"
        borderColor="purple.400"
        transition="all 0.3s"
        _hover={{ transform: 'translateX(3px)', shadow: 'lg' }}
        overflow="hidden"
        position="relative"
      >
        {/* Subtle background pattern */}
        <Box 
          position="absolute" 
          top="0" 
          right="0" 
          opacity="0.05" 
          width="150px" 
          height="150px"
          borderRadius="full"
          bg="purple.400"
          transform="translate(50px, -50px)"
        />
        
        <Text fontSize="sm" color="gray.400" mb={1}>
          Nov 2017 - Jul 2019
        </Text>
        <Text fontWeight="bold" color="purple.400" fontSize="xl" mb={2}>
          Smart Media
        </Text>
        <Text fontWeight="medium" color="gray.300" fontSize="md" mb={3}>Junior iOS Developer</Text>
        
        <Box>
          <Text fontSize="sm" color="gray.400" display="flex" alignItems="start" mb={2}>
            <Box as="span" color="purple.400" mr={2}>•</Box>
            Assisted in developing mobile applications for iOS platform
          </Text>
          <Text fontSize="sm" color="gray.400" display="flex" alignItems="start" mb={2}>
            <Box as="span" color="purple.400" mr={2}>•</Box>
            Created and implemented UI components following design specifications
          </Text>
          <Text fontSize="sm" color="gray.400" display="flex" alignItems="start">
            <Box as="span" color="purple.400" mr={2}>•</Box>
            Fixed bugs and improved application performance
          </Text>
        </Box>
        
        <Flex mt={4} mb={1} justifyContent="space-between" alignItems="center">
          <Text fontSize="xs" color="gray.500">Technologies:</Text>
          <Text fontSize="xs" color="gray.500">1.8 years</Text>
        </Flex>
        
        <Box mt={1} display="flex" flexWrap="wrap" gap={2}>
          <Box px={2} py={1} bg="gray.800" color="purple.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="purple.700">
            Swift
          </Box>
          <Box px={2} py={1} bg="gray.800" color="purple.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="purple.700">
            UIKit
          </Box>
          <Box px={2} py={1} bg="gray.800" color="purple.300" fontSize="xs" borderRadius="md" borderWidth={1} borderColor="purple.700">
            CocoaPods
          </Box>
        </Box>
      </Box>
    </Box>
    
    {/* End of timeline */}
    <Box 
      position="absolute"
      left="15px"
      bottom="-10px"
      width="40px"
      height="2px"
      bg="gray.700"
      transform="rotate(90deg)"
      transformOrigin="left"
    />
  </Box>
  
  {/* Career summary */}
  <Box 
    mt={8} 
    p={4} 
    borderRadius="lg" 
    bg="gray.800" 
    borderWidth={1} 
    borderColor="gray.700"
  >
    <Flex alignItems="center" mb={2}>
      <Box as="span" fontSize="lg" mr={2} role="img" aria-label="Career">
        🚀
      </Box>
      <Text fontWeight="bold" color="gray.300">Career Summary</Text>
    </Flex>
    <Text fontSize="sm" color="gray.400">
      Over 6+ years of iOS development experience, specializing in creating 
      high-performance mobile applications with elegant user interfaces and 
      robust architectures.
    </Text>
  </Box>
</Section>

<Section delay={0.3}>
  <Heading as="h3" variant="section-title">
    Skills
  </Heading>
  <Box mb={4}>
    <SimpleGrid columns={[2, 3, 4]} gap={4}>
      {/* iOS Development */}
      <Box 
        p={3} 
        bg={useColorModeValue('teal.50', 'teal.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="teal.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="teal.500" mb={1}>Swift</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="95%" h={1} bg="teal.400" borderRadius="full"/>
        </Box>
      </Box>
      
      <Box 
        p={3} 
        bg={useColorModeValue('teal.50', 'teal.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="teal.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="teal.500" mb={1}>SwiftUI</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="90%" h={1} bg="teal.400" borderRadius="full"/>
        </Box>
      </Box>
      
      <Box 
        p={3} 
        bg={useColorModeValue('teal.50', 'teal.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="teal.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="teal.500" mb={1}>UIKit</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="92%" h={1} bg="teal.400" borderRadius="full"/>
        </Box>
      </Box>
      
      <Box 
        p={3} 
        bg={useColorModeValue('teal.50', 'teal.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="teal.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="teal.500" mb={1}>Combine</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="85%" h={1} bg="teal.400" borderRadius="full"/>
        </Box>
      </Box>

      <Box 
        p={3} 
        bg={useColorModeValue('teal.50', 'teal.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="teal.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="teal.500" mb={1}>RxSwift</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="85%" h={1} bg="teal.400" borderRadius="full"/>
        </Box>
      </Box>

      <Box 
        p={3} 
        bg={useColorModeValue('teal.50', 'teal.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="teal.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="teal.500" mb={1}>MVVM</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="85%" h={1} bg="teal.400" borderRadius="full"/>
        </Box>
      </Box>

      <Box 
        p={3} 
        bg={useColorModeValue('teal.50', 'teal.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="teal.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="teal.500" mb={1}>MVC</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="85%" h={1} bg="teal.400" borderRadius="full"/>
        </Box>
      </Box>

      <Box 
        p={3} 
        bg={useColorModeValue('teal.50', 'teal.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="teal.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="teal.500" mb={1}>MVVM-C</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="85%" h={1} bg="teal.400" borderRadius="full"/>
        </Box>
      </Box>
      
      {/* Data & Storage */}
      <Box 
        p={3} 
        bg={useColorModeValue('blue.50', 'blue.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="blue.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="blue.500" mb={1}>Crashlytics</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="88%" h={1} bg="blue.400" borderRadius="full"/>
        </Box>
      </Box>

      <Box 
        p={3} 
        bg={useColorModeValue('blue.50', 'blue.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="blue.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="blue.500" mb={1}>Firebase Analytics</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="82%" h={1} bg="blue.400" borderRadius="full"/>
        </Box>
      </Box>
      
      {/* DevOps */}
      <Box 
        p={3} 
        bg={useColorModeValue('purple.50', 'purple.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="purple.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="purple.500" mb={1}>Bitrise CI/CD</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="80%" h={1} bg="purple.400" borderRadius="full"/>
        </Box>
      </Box>
      
      <Box 
        p={3} 
        bg={useColorModeValue('purple.50', 'purple.900')} 
        borderRadius="lg"
        borderLeft="4px solid"
        borderColor="purple.400"
        shadow="sm"
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      >
        <Text fontWeight="bold" fontSize="sm" color="purple.500" mb={1}>GitHub Actions</Text>
        <Box w="100%" h={1} bg="gray.200" borderRadius="full">
          <Box w="78%" h={1} bg="purple.400" borderRadius="full"/>
        </Box>
      </Box>
    </SimpleGrid>
  </Box>
  
  {/* Optional: Add skill categories */}
  <SimpleGrid columns={[1, 3, 3]} gap={6} mt={6}>
    <Box textAlign="center">
      <Box 
        p={4} 
        bg={useColorModeValue('teal.50', 'teal.900')} 
        borderRadius="lg"
        mb={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box as="span" fontSize="2xl" role="img" aria-label="Mobile Development">
          📱
        </Box>
      </Box>
      <Text fontWeight="bold" fontSize="sm">iOS Development</Text>
      <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
        Swift, SwiftUI, UIKit, Combine
      </Text>
    </Box>
    
    <Box textAlign="center">
      <Box 
        p={4} 
        bg={useColorModeValue('blue.50', 'blue.900')} 
        borderRadius="lg"
        mb={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box as="span" fontSize="2xl" role="img" aria-label="Data">
          🗄️
        </Box>
      </Box>
      <Text fontWeight="bold" fontSize="sm">Data & Storage</Text>
      <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
        Firebase, RESTful APIs
      </Text>
    </Box>
    
    <Box textAlign="center">
      <Box 
        p={4} 
        bg={useColorModeValue('purple.50', 'purple.900')} 
        borderRadius="lg"
        mb={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box as="span" fontSize="2xl" role="img" aria-label="DevOps">
          🚀
        </Box>
      </Box>
      <Text fontWeight="bold" fontSize="sm">CI/CD & DevOps</Text>
      <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
        Bitrise, GitHub Actions
      </Text>
    </Box>
  </SimpleGrid>
</Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Movies, Music,{' '}
            Gaming
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/lactuannn" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @lactuannn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/tuan-do-b75a2a167/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Tuan Do
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.craftz.dog/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={< IoLogoWebComponent/>}
              >
                @Takuya Matsuyama's homepage
              </Button>
            </Link>
          </ListItem>
        </List>
{/* 
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;200k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid> */}

        <Heading as="h3" variant="section-title">
        Let's Connect 🤝
        </Heading>
        <p>
        Have a project idea or want to discuss iOS development? Feel free to reach out!

        </p>

        <Box align="center" my={4}>
  <Button
    as={NextLink}
    href="mailto:lactuannn@gmail.com"
    scroll={false}
    leftIcon={<EmailIcon />}
    colorScheme="teal"
  >
    Contact Me
  </Button>
</Box>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
