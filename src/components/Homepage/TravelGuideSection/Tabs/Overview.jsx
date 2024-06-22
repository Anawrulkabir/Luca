const features = [
  {
    'title': 'Warm Hospitality',
    'description':
      'Bangladesh is renowned for its warm and welcoming hospitality. Tourists will experience the genuine friendliness and helpfulness of the Bangladeshi people, making them feel at home from the moment they arrive. Whether in bustling cities or remote villages, visitors are greeted with smiles and open arms.',
    'location': 'Nationwide',
    'image':
      'https://assets-global.website-files.com/63e012353f8612451c7b1598/650af377785676a11495cded__OGS9352.jpg',
  },
  {
    'title': 'Diverse Culinary Delights',
    'description':
      'Bangladesh offers a rich and diverse culinary landscape, from flavorful street food to traditional Bengali feasts. Tourists can indulge in mouthwatering dishes such as biryani, hilsa fish curry, pithas (rice cakes), and a variety of sweets. The local cuisine is a treat for food lovers and a highlight of any visit.',
    'location': 'Nationwide',
    'image':
      'https://i.pinimg.com/736x/c5/04/07/c50407c639e3cb7b42d8227be18aa636.jpg',
  },
  {
    'title': 'Cultural and Historical Riches',
    'description':
      'With a history spanning thousands of years, Bangladesh is home to numerous cultural and historical sites. Tourists can explore ancient ruins, majestic mosques, temples, and colonial architecture. Significant sites include the Sundarbans, the largest mangrove forest, and the historic city of Dhaka.',
    'location': 'Nationwide',
    'image':
      'https://3.bp.blogspot.com/-kl3mfvJvutI/W_KgROI96YI/AAAAAAAAKiE/2xcptoEAkeIYpWx-KkHyckj2mwKpm1UmACLcBGAs/s1600/cover.jpg',
  },
  {
    'title': 'Stunning Natural Landscapes',
    'description':
      "From the world's longest natural sea beach in Cox's Bazar to the lush tea gardens of Srimangal, Bangladesh boasts breathtaking natural beauty. Tourists can enjoy serene river cruises, explore picturesque hill tracts, and discover the rich biodiversity of the Sundarbans.",
    'location': 'Nationwide',
    'image':
      'https://www.shutterstock.com/image-photo/tea-plantations-darjeeling-west-bengal-600nw-1040262511.jpg',
  },
  {
    'title': 'Affordable Travel',
    'description':
      'Bangladesh offers great value for money, making it an ideal destination for budget-conscious travelers. Accommodation, food, and transportation are generally very affordable, allowing tourists to enjoy a wide range of experiences without breaking the bank.',
    'location': 'Nationwide',
    'image': 'https://mystead.com/wp-content/uploads/2019/07/t1-1038x693.jpg',
  },
  {
    'title': 'Unique Handicrafts and Souvenirs',
    'description':
      'Tourists will find an array of unique and beautiful handicrafts in Bangladesh, perfect for souvenirs. From intricate Nakshi Kantha (embroidered quilts) to traditional pottery and jute products, these crafts reflect the rich artistic heritage of the country and provide a memorable keepsake.',
    'location': 'Nationwide',
    'image': 'https://media.mehrnews.com/d/2018/12/10/4/2980613.jpg',
  },
]

export function Overview() {
  return (
    <section className=" lg:p-8 mt-8 dark:bg-gray-100 dark:text-gray-800">
      <div className="lg:container mx-auto lg:space-y-12 space-y-6">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row border  ${
              index % 2 !== 0 ? '' : 'lg:flex-row-reverse'
            }`}
          >
            <img
              src={feature.image}
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video object-cover"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
              <span className="text-xs uppercase dark:text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">{feature.title}</h3>
              <p className="my-6 dark:text-gray-600">{feature.description}</p>
              <button type="button" className="self-start">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
