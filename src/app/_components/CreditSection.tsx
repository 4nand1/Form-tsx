import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const CreditSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-10 px-4 bg-gray-50">           
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Get Your Free Credits</CardTitle>
                    <CardDescription className="text-center text-gray-600">
                        Sign up now and receive 100 free credits to get started!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col space-y-4">
                        <Input type="email" placeholder="Enter your email" className="w-full" />
                        <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                            Claim Free Credits
                        </Button>
                    </div>
                </CardContent>
                <CardFooter className="text-center text-sm text-gray-500">
                    No credit card required. Terms and conditions apply.
                </CardFooter>
            </Card>
        </div>
    )
}   
