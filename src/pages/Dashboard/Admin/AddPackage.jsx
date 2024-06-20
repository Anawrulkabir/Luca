// import { ChevronLeft, PlusCircle, Upload } from 'lucide-react'

// import { Badge } from '@/components/ui/badge'

// import { Button } from '@/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card'

// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table'
// import { Textarea } from '@/components/ui/textarea'
// import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
// import { useState } from 'react'
// import axios from 'axios'

// const AddPackage = () => {
//   const [files, setFile] = useState()
//   const handleChange = (e) => {
//     setFile(e.target.files)
//   }

//   const handleUpload = async () => {
//     const formData = new FormData()

//     for (let i = 0; i < files.length; i++) {
//       formData.append(`images[${i}]`, files[i])
//     }

//     console.log(files)
//     console.log(formData)
//     // const { data } = await axios.post(
//     //   `https://api.imgbb.com/1/upload?key=${
//     //     import.meta.env.VITE_IMGBB_API_KEY
//     //   }`,
//     //   formData
//     // )
//     fetch(
//       `https://api.imgbb.com/1/upload?key=${
//         import.meta.env.VITE_IMGBB_API_KEY
//       }`,
//       {
//         method: 'POST',
//         body: formData,
//       }
//     )
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.log(err))
//   }

//   return (
//     // <div className="lg:mx-10 lg:my-10">
//     //   <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
//     //     <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
//     //       <div className="flex items-center gap-4">
//     //         <Button variant="outline" size="icon" className="h-7 w-7">
//     //           <ChevronLeft className="h-4 w-4" />
//     //           <span className="sr-only">Back</span>
//     //         </Button>
//     //         <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
//     //           Pro Controller
//     //         </h1>
//     //         <Badge variant="outline" className="ml-auto sm:ml-0">
//     //           In stock
//     //         </Badge>
//     //         <div className="hidden items-center gap-2 md:ml-auto md:flex">
//     //           <Button variant="outline" size="sm">
//     //             Discard
//     //           </Button>
//     //           <Button size="sm">Save Product</Button>
//     //         </div>
//     //       </div>
//     //       <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
//     //         <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
//     //           <Card x-chunk="dashboard-07-chunk-0">
//     //             <CardHeader>
//     //               <CardTitle>Package Details</CardTitle>
//     //               <CardDescription>
//     //                 Only admin can publish a package.
//     //               </CardDescription>
//     //             </CardHeader>
//     //             <CardContent>
//     //               <div className="grid gap-6">
//     //                 <div className="grid gap-3">
//     //                   <Label htmlFor="name">Name</Label>
//     //                   <Input
//     //                     id="name"
//     //                     type="text"
//     //                     className="w-full"
//     //                     // defaultValue="World Heritage of Bangladesh"
//     //                     placeholder="World Heritage of Bangladesh"
//     //                   />
//     //                 </div>
//     //                 <div className="grid gap-3">
//     //                   <Label htmlFor="description">Description</Label>
//     //                   <Textarea
//     //                     id="description"
//     //                     placeholder="Details description about the package"
//     //                     // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
//     //                     className="min-h-32"
//     //                   />
//     //                 </div>
//     //               </div>
//     //             </CardContent>
//     //           </Card>
//     //           <Card x-chunk="dashboard-07-chunk-1">
//     //             <CardHeader>
//     //               <CardTitle>Stock</CardTitle>
//     //               <CardDescription>
//     //                 Lipsum dolor sit amet, consectetur adipiscing elit
//     //               </CardDescription>
//     //             </CardHeader>
//     //             <CardContent>
//     //               <Table>
//     //                 <TableHeader>
//     //                   <TableRow>
//     //                     <TableHead className="w-[100px]">SKU</TableHead>
//     //                     <TableHead>Stock</TableHead>
//     //                     <TableHead>Price</TableHead>
//     //                     <TableHead className="w-[100px]">Size</TableHead>
//     //                   </TableRow>
//     //                 </TableHeader>
//     //                 <TableBody>
//     //                   <TableRow>
//     //                     <TableCell className="font-semibold">
//     //                       GGPC-001
//     //                     </TableCell>
//     //                     <TableCell>
//     //                       <Label htmlFor="stock-1" className="sr-only">
//     //                         Stock
//     //                       </Label>
//     //                       <Input
//     //                         id="stock-1"
//     //                         type="number"
//     //                         defaultValue="100"
//     //                       />
//     //                     </TableCell>
//     //                     <TableCell>
//     //                       <Label htmlFor="price-1" className="sr-only">
//     //                         Price
//     //                       </Label>
//     //                       <Input
//     //                         id="price-1"
//     //                         type="number"
//     //                         defaultValue="99.99"
//     //                       />
//     //                     </TableCell>
//     //                     <TableCell>
//     //                       <ToggleGroup
//     //                         type="single"
//     //                         defaultValue="s"
//     //                         variant="outline"
//     //                       >
//     //                         <ToggleGroupItem value="s">S</ToggleGroupItem>
//     //                         <ToggleGroupItem value="m">M</ToggleGroupItem>
//     //                         <ToggleGroupItem value="l">L</ToggleGroupItem>
//     //                       </ToggleGroup>
//     //                     </TableCell>
//     //                   </TableRow>
//     //                   <TableRow>
//     //                     <TableCell className="font-semibold">
//     //                       GGPC-002
//     //                     </TableCell>
//     //                     <TableCell>
//     //                       <Label htmlFor="stock-2" className="sr-only">
//     //                         Stock
//     //                       </Label>
//     //                       <Input
//     //                         id="stock-2"
//     //                         type="number"
//     //                         defaultValue="143"
//     //                       />
//     //                     </TableCell>
//     //                     <TableCell>
//     //                       <Label htmlFor="price-2" className="sr-only">
//     //                         Price
//     //                       </Label>
//     //                       <Input
//     //                         id="price-2"
//     //                         type="number"
//     //                         defaultValue="99.99"
//     //                       />
//     //                     </TableCell>
//     //                     <TableCell>
//     //                       <ToggleGroup
//     //                         type="single"
//     //                         defaultValue="m"
//     //                         variant="outline"
//     //                       >
//     //                         <ToggleGroupItem value="s">S</ToggleGroupItem>
//     //                         <ToggleGroupItem value="m">M</ToggleGroupItem>
//     //                         <ToggleGroupItem value="l">L</ToggleGroupItem>
//     //                       </ToggleGroup>
//     //                     </TableCell>
//     //                   </TableRow>
//     //                   <TableRow>
//     //                     <TableCell className="font-semibold">
//     //                       GGPC-003
//     //                     </TableCell>
//     //                     <TableCell>
//     //                       <Label htmlFor="stock-3" className="sr-only">
//     //                         Stock
//     //                       </Label>
//     //                       <Input id="stock-3" type="number" defaultValue="32" />
//     //                     </TableCell>
//     //                     <TableCell>
//     //                       <Label htmlFor="price-3" className="sr-only">
//     //                         Stock
//     //                       </Label>
//     //                       <Input
//     //                         id="price-3"
//     //                         type="number"
//     //                         defaultValue="99.99"
//     //                       />
//     //                     </TableCell>
//     //                     <TableCell>
//     //                       <ToggleGroup
//     //                         type="single"
//     //                         defaultValue="s"
//     //                         variant="outline"
//     //                       >
//     //                         <ToggleGroupItem value="s">S</ToggleGroupItem>
//     //                         <ToggleGroupItem value="m">M</ToggleGroupItem>
//     //                         <ToggleGroupItem value="l">L</ToggleGroupItem>
//     //                       </ToggleGroup>
//     //                     </TableCell>
//     //                   </TableRow>
//     //                 </TableBody>
//     //               </Table>
//     //             </CardContent>
//     //             <CardFooter className="justify-center border-t p-4">
//     //               <Button size="sm" variant="ghost" className="gap-1">
//     //                 <PlusCircle className="h-3.5 w-3.5" />
//     //                 Add Variant
//     //               </Button>
//     //             </CardFooter>
//     //           </Card>
//     //           <Card x-chunk="dashboard-07-chunk-2">
//     //             <CardHeader>
//     //               <CardTitle>Product Category</CardTitle>
//     //             </CardHeader>
//     //             <CardContent>
//     //               <div className="grid gap-6 sm:grid-cols-3">
//     //                 <div className="grid gap-3">
//     //                   <Label htmlFor="category">Category</Label>
//     //                   <Select>
//     //                     <SelectTrigger
//     //                       id="category"
//     //                       aria-label="Select category"
//     //                     >
//     //                       <SelectValue placeholder="Select category" />
//     //                     </SelectTrigger>
//     //                     <SelectContent>
//     //                       <SelectItem value="clothing">Clothing</SelectItem>
//     //                       <SelectItem value="electronics">
//     //                         Electronics
//     //                       </SelectItem>
//     //                       <SelectItem value="accessories">
//     //                         Accessories
//     //                       </SelectItem>
//     //                     </SelectContent>
//     //                   </Select>
//     //                 </div>
//     //                 <div className="grid gap-3">
//     //                   <Label htmlFor="subcategory">
//     //                     Subcategory (optional)
//     //                   </Label>
//     //                   <Select>
//     //                     <SelectTrigger
//     //                       id="subcategory"
//     //                       aria-label="Select subcategory"
//     //                     >
//     //                       <SelectValue placeholder="Select subcategory" />
//     //                     </SelectTrigger>
//     //                     <SelectContent>
//     //                       <SelectItem value="t-shirts">T-Shirts</SelectItem>
//     //                       <SelectItem value="hoodies">Hoodies</SelectItem>
//     //                       <SelectItem value="sweatshirts">
//     //                         Sweatshirts
//     //                       </SelectItem>
//     //                     </SelectContent>
//     //                   </Select>
//     //                 </div>
//     //               </div>
//     //             </CardContent>
//     //           </Card>
//     //         </div>
//     //         <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
//     //           <Card x-chunk="dashboard-07-chunk-3">
//     //             <CardHeader>
//     //               <CardTitle>Product Status</CardTitle>
//     //             </CardHeader>
//     //             <CardContent>
//     //               <div className="grid gap-6">
//     //                 <div className="grid gap-3">
//     //                   <Label htmlFor="status">Status</Label>
//     //                   <Select>
//     //                     <SelectTrigger id="status" aria-label="Select status">
//     //                       <SelectValue placeholder="Select status" />
//     //                     </SelectTrigger>
//     //                     <SelectContent>
//     //                       <SelectItem value="draft">Draft</SelectItem>
//     //                       <SelectItem value="published">Active</SelectItem>
//     //                       <SelectItem value="archived">Archived</SelectItem>
//     //                     </SelectContent>
//     //                   </Select>
//     //                 </div>
//     //               </div>
//     //             </CardContent>
//     //           </Card>
//     //           <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
//     //             <CardHeader>
//     //               <CardTitle>Product imgs</CardTitle>
//     //               <CardDescription>
//     //                 Lipsum dolor sit amet, consectetur adipiscing elit
//     //               </CardDescription>
//     //             </CardHeader>
//     //             <CardContent>
//     //               <div className="grid gap-2">
//     //                 <img
//     //                   alt="Product img"
//     //                   className="aspect-square w-full rounded-md object-cover"
//     //                   height="300"
//     //                   src="https://ui.shadcn.com/placeholder.svg"
//     //                   width="300"
//     //                 />
//     //                 <div className="grid grid-cols-3 gap-2">
//     //                   <button>
//     //                     <img
//     //                       alt="Product img"
//     //                       className="aspect-square w-full rounded-md object-cover"
//     //                       height="84"
//     //                       src="https://ui.shadcn.com/placeholder.svg"
//     //                       width="84"
//     //                     />
//     //                   </button>
//     //                   <button>
//     //                     <img
//     //                       alt="Product img"
//     //                       className="aspect-square w-full rounded-md object-cover"
//     //                       height="84"
//     //                       src="https://ui.shadcn.com/placeholder.svg"
//     //                       width="84"
//     //                     />
//     //                   </button>
//     //                   <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
//     //                     <Upload className="h-4 w-4 text-muted-foreground" />
//     //                     <span className="sr-only">Upload</span>
//     //                   </button>
//     //                 </div>
//     //               </div>
//     //             </CardContent>
//     //           </Card>
//     //           <Card x-chunk="dashboard-07-chunk-5">
//     //             <CardHeader>
//     //               <CardTitle>Archive Product</CardTitle>
//     //               <CardDescription>
//     //                 Lipsum dolor sit amet, consectetur adipiscing elit.
//     //               </CardDescription>
//     //             </CardHeader>
//     //             <CardContent>
//     //               <div></div>
//     //               <Button size="sm" variant="secondary">
//     //                 Archive Product
//     //               </Button>
//     //             </CardContent>
//     //           </Card>
//     //         </div>
//     //       </div>
//     //       <div className="flex items-center justify-center gap-2 md:hidden">
//     //         <Button variant="outline" size="sm">
//     //           Discard
//     //         </Button>
//     //         <Button size="sm">Save Product</Button>
//     //       </div>
//     //     </div>
//     //   </main>
//     // </div>
//     <div>
//       <input type="file" multiple onChange={handleChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   )
// }

// export default AddPackage

import { useState } from 'react'

const AddPackage = () => {
  const [files, setFiles] = useState([])
  const [uploadedUrls, setUploadedUrls] = useState([])
  const [isUploading, setIsUploading] = useState(false)

  const handleChange = (e) => {
    setFiles(e.target.files)
  }

  const handleUpload = async () => {
    setIsUploading(true)
    const promises = []

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData()
      formData.append('image', files[i])

      const promise = fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: 'POST',
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setUploadedUrls((prevUrls) => [...prevUrls, data.data.url])
          } else {
            console.error('Error uploading image:', data)
          }
        })
        .catch((err) => console.error('Error:', err))

      promises.push(promise)
    }

    // Wait for all promises to resolve
    await Promise.all(promises)
    setIsUploading(false)
  }
  console.log(uploadedUrls)

  return (
    <div>
      <input type="file" multiple onChange={handleChange} />
      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
      {uploadedUrls.length > 0 && (
        <div>
          <h3>Uploaded Images</h3>
          <ul>
            {uploadedUrls.map((url, index) => (
              <li key={index}>
                <img src={url} alt={`Uploaded ${index}`} width="100" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AddPackage
