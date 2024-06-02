import { Gem, Blocks, GanttChartSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Description } from "@radix-ui/react-dialog"

const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Design',
        description: "lLorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, neque. Lorem ipsum dolor, sit amet consectetur",
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: "lLorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, neque. Lorem ipsum dolor, sit amet consectetur",
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description: "lLorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, neque. Lorem ipsum dolor, sit amet consectetur",
    }
]
const Service = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-16 xl:mb-24 text-center mx-auto">
                    My Service
                </h2>
                {/* grid items  */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {serviceData.map((item, index) => {
                        return (
                            <Card key={index} className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'>
                                <CardHeader className='text-primary absolute -top-[60px]'>
                                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="mb-4">
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription className="text-lg">
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Service