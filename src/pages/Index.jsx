import { Container, Text, VStack, Heading, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { FaBrain, FaRobot, FaChartLine, FaDatabase, FaCode, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} align="start">
        <Heading as="h1" size="2xl" mb={4}>
          Artificial Intelligence and Machine Learning Notes
        </Heading>

        <Heading as="h2" size="lg">
          Introduction
        </Heading>
        <Text>Artificial Intelligence (AI) and Machine Learning (ML) are rapidly evolving fields that are transforming industries and society. AI refers to the simulation of human intelligence in machines, while ML is a subset of AI that involves the development of algorithms that allow computers to learn from and make decisions based on data.</Text>

        <Heading as="h2" size="lg">
          Key Concepts
        </Heading>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaBrain} color="teal.500" />
            <Text as="span" fontWeight="bold">
              Artificial Intelligence (AI):
            </Text>{" "}
            The broader concept of machines being able to carry out tasks in a way that we would consider “smart”.
          </ListItem>
          <ListItem>
            <ListIcon as={FaRobot} color="teal.500" />
            <Text as="span" fontWeight="bold">
              Machine Learning (ML):
            </Text>{" "}
            A subset of AI that involves the use of algorithms and statistical models to enable machines to improve their performance on a task through experience.
          </ListItem>
          <ListItem>
            <ListIcon as={FaChartLine} color="teal.500" />
            <Text as="span" fontWeight="bold">
              Deep Learning:
            </Text>{" "}
            A subset of ML that uses neural networks with many layers (deep neural networks) to analyze various factors of data.
          </ListItem>
          <ListItem>
            <ListIcon as={FaDatabase} color="teal.500" />
            <Text as="span" fontWeight="bold">
              Data Science:
            </Text>{" "}
            An interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from data.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCode} color="teal.500" />
            <Text as="span" fontWeight="bold">
              Algorithms:
            </Text>{" "}
            A set of rules or instructions given to an AI, which it uses to solve problems or perform tasks.
          </ListItem>
        </List>

        <Heading as="h2" size="lg">
          Applications
        </Heading>
        <Text>AI and ML have a wide range of applications, including:</Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaRocket} color="teal.500" />
            Autonomous vehicles
          </ListItem>
          <ListItem>
            <ListIcon as={FaRocket} color="teal.500" />
            Healthcare diagnostics
          </ListItem>
          <ListItem>
            <ListIcon as={FaRocket} color="teal.500" />
            Financial market analysis
          </ListItem>
          <ListItem>
            <ListIcon as={FaRocket} color="teal.500" />
            Natural language processing
          </ListItem>
          <ListItem>
            <ListIcon as={FaRocket} color="teal.500" />
            Robotics
          </ListItem>
        </List>

        <Heading as="h2" size="lg">
          Conclusion
        </Heading>
        <Text>AI and ML are powerful technologies that are driving innovation across various sectors. As these fields continue to evolve, they will undoubtedly bring about significant changes and advancements in the way we live and work.</Text>

        <IconButton aria-label="Launch" icon={<FaRocket />} size="lg" colorScheme="teal" />
      </VStack>
    </Container>
  );
};

export default Index;
