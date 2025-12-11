import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/components/animate-ui/components/animate/tabs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function AnimateTabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account" className="w-full">
        <TabsList
          className="
      flex items-center gap-4 
      bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      rounded-full px-6 py-3 w-fit mx-auto
    "
        >
          <TabsTrigger
            value="account"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            AI & ML
          </TabsTrigger>

          <TabsTrigger
            value="password"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            Web
          </TabsTrigger>

          {/* Add more like screenshot */}
          <TabsTrigger
            value="mobile"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            Mobile App
          </TabsTrigger>

          <TabsTrigger
            value="uiux"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            UI/UX
          </TabsTrigger>

          <TabsTrigger
            value="ecommerce"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            eCommerce
          </TabsTrigger>

          <TabsTrigger
            value="cloud"
            className="
        rounded-full px-6 py-2 text-sm font-medium
        data-[state=active]:bg-blue-600 
        data-[state=active]:text-white
        data-[state=inactive]:text-gray-600
        transition-all
      "
          >
            Cloud
          </TabsTrigger>
        </TabsList>

        <Card className="shadow-none py-0">
          <TabsContents className="py-6">
            <TabsContent value="account" className="flex flex-col gap-6">
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </TabsContent>
            <TabsContent value="password" className="flex flex-col gap-6">
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-current">Current password</Label>
                  <Input id="tabs-demo-current" type="password" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">New password</Label>
                  <Input id="tabs-demo-new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </TabsContent>
          </TabsContents>
        </Card>
      </Tabs>
    </div>
  );
}