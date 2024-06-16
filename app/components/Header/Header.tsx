import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    Paper,
    useMantineTheme,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
  } from '@tabler/icons-react';
  import classes from './header.module.css';
  
  const mockdata = [
    {
      icon: null,
      title: 'Veed for Bussiness',
      description: 'Video for team that requires collaboration, access and privacy',
    },
    {
      icon: null,
      title: 'Security and Privacy',
      description: 'Data privacy SSO and more',
    },
  ];
  
  export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = mockdata.map((item) => (
      <UnstyledButton fz={'h2'} className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            {item.icon}
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
        <>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            VEED
  
            <Group h="100%" gap={0} visibleFrom="sm">
              
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Products
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.gray[3]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                
              </HoverCard>

              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Use Cases
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.gray[3]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
              </HoverCard>
            

              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Resources
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.gray[3]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
              </HoverCard>


              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        For Bussiness
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.gray[3]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown w={700} h={150} p={'xl'} mt={'xl'} style={{ overflow: 'hidden', backgroundColor: "#181A1B", border: "none", borderRadius: "20px", color: "#D7D5CF"}}>
                
  
                  <SimpleGrid cols={3} spacing={0}>
                    For Bussiness
                    {links}
                  </SimpleGrid>
  
                </HoverCard.Dropdown>
              </HoverCard>

              
              <a href="#" className={classes.link}>
                Pricing
              </a>
            </Group>
  
            <Group visibleFrom="sm">
              
              <Button bg={'#181A1B'} >Book a Demo</Button>
              <Button bg={'#181A1B'} >Log in</Button>
              <Button bg={'#26292A'} radius={'xl'} fz={'md'}>Sign up</Button>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
  
            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                
                  Features
                
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">l in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
        </>
    );
  }