import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Divider,
    useMantineTheme,
    Button,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  import classes from './features.module.css';
  
  const mockdata = [
    {
      title: 'Basic',
      description:
        'Ideal starter plan',
      icon: IconGauge,
      price: "₹290.67",
      save: "36%",
      recommend: false,
      trail: false,
      priceDesc: "Per user/month, billed yearly",
      buttonTitle: "Go Basic",
      points: [
        "Personalized AI avatars",
        "Brand assets and templated",
        "Multiple workspaces",
        "Custom usage limits",
      ]
    },
    {
      title: 'Pro',
      description:
        'For pro video creation',
      icon: IconUser,
      price: "₹599",
      save: "21%",
      recommend: true,
      trail: false,
      priceDesc: "Per user/month, billed yearly",
      buttonTitle: "Go Pro",
      points: [
        "Personalized AI avatars",
        "Brand assets and templated",
        "Multiple workspaces",
        "Custom usage limits",
        "Creator training",

      ]
    },
    {
      title: 'Bussiness',
      description:
        'For upto 5 people',
      icon: IconCookie,
      price: "₹1500",
      save: "14%",
      priceDesc: "Per user/month, billed yearly",
      recommend: false,
      trail: true,
      buttonTitle: "Go Bussiness",
      points: [
        "AI Avatar 4 hr/yr",
        "Subtitles 134 hr/yr",
        "Translate to 50+ Languages",
        "Text to speech 60 hr/yr",
        "4k Export Quality",

      ]
    },
    {
        title: 'Enterprise',
        description:
          'Scale video across your team',
        icon: IconCookie,
        price: "Let's Talk",
        save: null,
        priceDesc: "Custom pricing",
        buttonTitle: "Book a Demo",
        recommend: false,
        trail: true,
        points: [
          "Personalized AI avatars",
          "Brand assets and templated",
          "Multiple workspaces",
          "Custom usage limits",
          "Creator training",
          "Account manager"
        ]
      },
  ];
  
  export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card style={{border: `${feature.recommend ? "2px solid #000F95" : ""}` }} key={feature.title} shadow="md" radius="lg" className={classes.card} padding="xl" pb={'sm'} pt={'md'}>

        <Text fw={600} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fw={500} className={classes.desc}>
          {feature.description}
        </Text>
        <Text className={classes.price}>
          {feature.price} {feature.save && <button className={classes.btn}>save {feature.save}</button>}
        </Text>
        <Text fz={'xs'} fw={200} className={classes.desc}>
          {feature.priceDesc}
        </Text>
        <Button style={{background: `${feature.recommend ? "linear-gradient(to right, #000F95, #262938)" : ""}`,  border: `${feature.recommend ? "none" : ""}`}} fw={300} py={'md'} mt={'md'}  radius={"xl"} className={classes.sBtn} color='#C7C4BD'>{feature.buttonTitle}</Button>
        <Text fw={400} ta={'center'} mt={'xs'} className={classes.trial}>
          {feature.trail ? "or Request a trial" : " "}
        </Text>

        <Divider mb={'sm'} size={1} mt={'sm'} />

        {/* <Container mt={'md'}> */}
          {feature.points.map((point) => (
            <Text className={classes.point} key={point}>
              &#10003; {point}
            </Text>
          ))}
        {/* </Container> */}

        
        
      </Card>
    ));
  
    return (
      <Container size="xl" py="xl">
        
        <Title order={2} className={classes.title} ta="center" mt="sm">
          GREAT VIDEOS START WITH PLAN
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center">
          Try VEED with our <span style={{textDecoration: "underline", color: "#64A1FE"}}>Free Plan</span>
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg" mt={15}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }