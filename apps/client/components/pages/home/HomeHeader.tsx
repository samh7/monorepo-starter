import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Title } from "@radix-ui/react-dialog";
import { History, Plus, Search } from "lucide-react";
import { ReactElement } from "react";

type buttonsContentsProp = {
    name: string,
    icon: ReactElement<any>
}

export default function HomeHeader() {

    const buttonsContents: buttonsContentsProp[] = [
        {
            name: "New Recommendation",
            icon: <Plus />
        },
        {
            name: "Browse Laptops",
            icon: <Search />

        },
        {
            name: "View Histrory",
            icon: <History />
        },
    ]

    return (
        <div className="flex flex-col 
         items-center
         w-full
        lg:flex-row">
            {/* left */}
            <div className="flex flex-col space-y-4
            w-full  
            lg:w-3/4
            ">
                <h1 className="text-3xl font-bold">Find Your Perfect Laptop</h1>
                <p className=" text-gray-600">Get personalized laptop recommendations based on your needs. Choose how you'd like to proceed:</p>
                <div className="flex flex-wrap space-x-5">
                    {buttonsContents.map((buttonItems: buttonsContentsProp, idx: number) => {
                        return <div
                            key={idx}
                        >
                            {buttonItems.name === "New Recommendation" ?
                                <Button
                                    className="mb-5"
                                    variant={"default"}
                                >
                                    <span>
                                        {buttonItems.icon}
                                    </span>
                                    <span>
                                        {buttonItems.name}
                                    </span>
                                </Button> :

                                <Button
                                    className="mb-5"
                                    variant={"outline"}
                                >
                                    <span>
                                        {buttonItems.icon}
                                    </span>
                                    <span>
                                        {buttonItems.name}
                                    </span>
                                </Button>
                            }
                        </div>
                    })}
                </div>
            </div>


            {/* right */}
            <div className="flex flex-col
            mt-5
            px-2
            w-full
            lg:w-1/4
            h-[100px]
            ">
                <Card className="h-full w-full">
                    <div className="flex h-full">

                        <div className="flex flex-col
                        h-full justify-center items-center
                        space-y-2 w-1/2
                        ">
                            <h1 className="text-2xl font-bold">0</h1>
                            <h1>Saved Laptops</h1>
                        </div>

                        <div className="flex flex-col
                        h-full  justify-center items-center
                        space-y-2 w-1/2
                        ">
                            <h1 className="text-2xl font-bold">0</h1>
                            <h1>Comparisons</h1>
                        </div>
                    </div>
                </Card>

            </div>

        </div>
    )
}
