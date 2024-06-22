import { BellIcon, CheckIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'

const notifications = [
  {
    title: 'Your call has been confirmed.',
    description: '1 hour ago',
  },
  {
    title: 'You have a new message!',
    description: '1 hour ago',
  },
  {
    title: 'Your subscription is expiring soon!',
    description: '2 hours ago',
  },
]

const Stories = () => {
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <p className="text-3xl font-bold text-center my-10">Tourist Stories</p>
      <section className="bg-gray-100 text-gray-800 px-20">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">
                Share your Stories with us.
              </h2>
              <p className="text-gray-600">
                Pri ex magna scaevola moderatius. Nullam accommodare no vix, est
                ei diceret alienum, et sit cetero malorum. Et sea iudico
                consequat, est sanctus adipisci ex.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      An audire commodo habemus cum. Ne sed corrumpit
                      repudiandae. Tota aliquip democritum pro in, nec
                      democritum intellegam ne. Propriae volutpat dissentiet ea
                      sit, nec at lorem inani tritani, an ius populo perfecto
                      vituperatoribus. Eu cum case modus salutandi, ut eum
                      vocent sensibus reprehendunt.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://images.unsplash.com/profile-1606728664311-4bcc76a40e98image?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-gray-600">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      Sit wisi sapientem ut, pri civibus temporibus voluptatibus
                      et, ius cu hinc fabulas. Nam meliore minimum et, regione
                      convenire cum id. Ex pro eros mucius consectetuer, pro
                      magna nulla nonumy ne, eam putent iudicabit consulatu cu.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://images.unsplash.com/profile-1606728664311-4bcc76a40e98image?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-gray-600">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      Putant omnium elaboraret per ut. Id dicta tritani nominavi
                      quo, mea id justo errem elaboraret. Agam mollis scripserit
                      ea his, ut nec postea verear persecuti. Ea noster senserit
                      eam, ferri omittantur ei nec. Id mel solet libris
                      efficiantur, commune explicari et eos. Case movet ad est,
                      sed tota vocent appetere ea.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://images.unsplash.com/profile-1606728664311-4bcc76a40e98image?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-gray-600">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-gray-50">
                    <p>
                      Te omnes virtute volutpat sed. Ei esse eros interesset
                      vel, ei populo denique ocurreret vix, eu cum pertinax
                      mandamus vituperatoribus. Solum nihil luptatum per ex, ei
                      amet viderer eos. Ea illum labitur mnesarchum pro. Eius
                      meis salutandi ei nam, alterum expetenda et nec. Expetenda
                      intellegat at eum, per mazim sanctus honestatis ad. Ei
                      noluisse invenire vix. Te ancillae patrioque qui, probo
                      bonorum vivendum ex vim.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://images.unsplash.com/profile-1606728664311-4bcc76a40e98image?bg=fff&crop=faces&dpr=2&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm text-gray-600">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 mx-4 lg:mx-12 gap-6">
        {cards.map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <BellIcon />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Push Notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Send notifications to device.
                  </p>
                </div>
                <Switch />
              </div>
              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div> */}
    </>
  )
}
export default Stories
