import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react"

const infoData = [
    {
        icon: <User2 />,
        text: "Diawan Sallekarurung",
    },
    {
        icon: <MailIcon />,
        text: "diawan.sallekarurung@gmail.com",
    },
    {
        icon: <HomeIcon />,
        text: "Makassar",
    },
    {
        icon: <PhoneCall />,
        text: "+123 456 789",
    },
    {
        icon: <GraduationCap />,
        text: "Sistem Informasi",
    },
    {
        icon: <Calendar />,
        text: "Born on 10 January 2000",
    },
    // {
    //     icon : <Briefcase />,
    //     text : "",
    // },

]

const qualityficationData = [
    {
        title: "education",
        data: [
            {
                university: 'Universitas Hasanuddin',
                qualification: 'Sistem Informasi',
                years: '2018 - 2024'
            },
            {
                university: 'Universitas Hasanuddin',
                qualification: 'Sistem Informasi',
                years: '2018 - 2024'
            },
            {
                university: 'Universitas Hasanuddin',
                qualification: 'Sistem Informasi',
                years: '2018 - 2024'
            },
            {
                university: 'Universitas Hasanuddin',
                qualification: 'Sistem Informasi',
                years: '2018 - 2024'
            }
        ]
    },
    {
        title: "experience",
        data: [
            {
                company: 'Universitas Hasanuddin',
                qualification: 'Sistem Informasi',
                years: '2018 - 2024'
            },
            {
                company: 'Universitas Hasanuddin',
                qualification: 'Sistem Informasi',
                years: '2018 - 2024'
            },
            {
                company: 'Universitas Hasanuddin',
                qualification: 'Sistem Informasi',
                years: '2018 - 2024'
            },

        ]
    },

]

const skillData = [
    {
        title: "skills",
        data: [
            {
                name: 'HTML, CSS, dan Javascript'
            },
            {
                name: 'React Js atau Next Js'
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
        ]
    }
]


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto">
                    About Me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* image  */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg
                            containerStyles={'bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'}
                            imgSrc={'/about/developer.png'}
                        />
                    </div>

                    {/* tabs  */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full h-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger value='personal' className="w-[162px] xl:w-auto">
                                    Personal Info
                                </TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value='Qualifications'>
                                    Qualifications
                                </TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value='skills'>
                                    Skills
                                </TabsTrigger>
                            </TabsList>
                            {/* tabs content  */}
                            <div className="text-lg mt-12 xl:mt-8">
                                {/* personal  */}
                                <TabsContent value='personal'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">
                                            Unmatched Service Quality for Over 10 Years
                                        </h3>
                                        <p className="subtitle max-xl: mx-auto xl:mx-0">
                                            I Specialize in Crafting intuitive website with cutting-edge technology, delivering dynamic and enganging user experiences.
                                        </p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                        key={index}
                                                    >
                                                        <div className="text-primary">
                                                            {item.icon}
                                                        </div>
                                                        <div>{item.text}</div>

                                                    </div>
                                                )
                                            })}
                                        </div>

                                        {/* languange  */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skills</div>
                                            <div className="border-b border-border"></div>
                                            <div>Bahasa Indonesia, Bahasa Inggris</div>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* qualifications  */}
                                <TabsContent value='Qualifications'>
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            My Awesome Journey
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">

                                            {/* educations  */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualityficationData, 'education').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualityficationData, 'education').data.map((item, index) => {
                                                        const { university, qualification, years } = item
                                                        return (
                                                            <div key={index} className="flex gap-x-8 group">
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                                                    </div>
                                                                </div>
                                                                <div className="">
                                                                    <div className="font-semibold text-xl leading-none mb-2">
                                                                        {university}
                                                                    </div>
                                                                    <div>
                                                                        {qualification}
                                                                    </div>
                                                                    <div>
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>

                                            {/* experience  */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualityficationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualityficationData, 'experience').data.map((item, index) => {
                                                        const { company, role, years } = item
                                                        return (
                                                            <div key={index} className="flex gap-x-8 group">
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                                                    </div>
                                                                </div>
                                                                <div className="">
                                                                    <div className="font-semibold text-xl leading-none mb-2">
                                                                        {company}
                                                                    </div>
                                                                    <div>
                                                                        {role}
                                                                    </div>
                                                                    <div>
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </TabsContent>

                                {/* skills  */}
                                <TabsContent value='skills'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                                        {/* skills  */}
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            <div>
                                                {getData(skillData, 'skills').data.map((item, index) => {
                                                    const { name } = item
                                                    return (
                                                        <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                            <div className="font-medium">
                                                                {name}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        {/* tools  */}
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            {/* tools list  */}
                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(skillData, 'tools').data.map((item, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <Image src={item.imgPath} width={48} height={48} alt="" priority />
                                                        </div>

                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About