import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "John Doe",
    avatar: "JD",
    content: "BPL Financials found me the perfect auto insurance policy at a great price!",
    position: "Small Business Owner",
  },
  {
    name: "Jane Smith",
    avatar: "JS",
    content: "I've been using BPL Financials for all my insurance needs for years. They're the best!",
    position: "Freelance Designer",
  },
  {
    name: "Bob Johnson",
    avatar: "BJ",
    content: "The team at BPL Financials made getting home insurance so easy. Highly recommended!",
    position: "Retired Teacher",
  },
  {
    name: "Alice Brown",
    avatar: "AB",
    content: "Their financial planning services have been invaluable in preparing for my retirement.",
    position: "Marketing Executive",
  },
  {
    name: "Charlie Wilson",
    avatar: "CW",
    content: "BPL Financials' business insurance solutions have given me peace of mind as I grow my company.",
    position: "Tech Entrepreneur",
  },
  {
    name: "Eva Martinez",
    avatar: "EM",
    content: "The personalized investment advice I received has significantly improved my portfolio performance.",
    position: "Healthcare Professional",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-primary">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

