



"use client"; // Diperlukan untuk state pencarian dan dialog

import React, { useState, useMemo } from 'react';
import {
  Search,
  Plus,
  MoreHorizontal,
  ChevronDown,
} from 'lucide-react';

// Impor komponen shadcn/ui
// Pastikan path ini sesuai dengan struktur proyek Anda
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
// Impor baru untuk Dialog, Label, dan Select
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose, // Untuk tombol Batal
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


// --- DEFINISI TIPE DATA BARU ---
interface StockDetails {
  s: number;
  m: number;
  l: number;
  xl: number;
}

type Gender = "Male" | "Female";
type AgeCategory = "Dewasa" | "Remaja" | "Anak" | "Bayi";
type ProductType = "T-shirt" | "Celana" | "Kemeja"; // Bisa ditambahkan

interface ProductItem {
  id: string;
  name: string;
  imgSrc: string;
  gender: Gender;
  ageCategory: AgeCategory;
  productType: ProductType;
  stockDetails: StockDetails;
  totalStock: number; // Dihitung dari stockDetails
  price: number;
}
// --- END DEFINISI TIPE DATA ---

// --- MOCK DATA BARU ---
// Menghitung total stok secara otomatis
const calculateTotalStock = (details: StockDetails): number => {
  return details.s + details.m + details.l + details.xl;
};

const mockProductItems: ProductItem[] = [
  { 
    id: 'P-001', name: 'Kemeja Pria Lengan Panjang', imgSrc: 'https://placehold.co/40x40/3182CE/FFFFFF?text=Km', 
    gender: 'Male', ageCategory: 'Dewasa', productType: 'Kemeja',
    stockDetails: { s: 10, m: 20, l: 15, xl: 5 }, totalStock: 50, price: 150000 
  },
  { 
    id: 'P-002', name: 'T-shirt Anak Lucu', imgSrc: 'https://placehold.co/40x40/E53E3E/FFFFFF?text=Ts', 
    gender: 'Female', ageCategory: 'Anak', productType: 'T-shirt',
    stockDetails: { s: 20, m: 20, l: 0, xl: 0 }, totalStock: 40, price: 75000 
  },
  { 
    id: 'P-003', name: 'Celana Jeans Remaja', imgSrc: 'https://placehold.co/40x40/000000/FFFFFF?text=Cj', 
    gender: 'Male', ageCategory: 'Remaja', productType: 'Celana',
    stockDetails: { s: 5, m: 10, l: 10, xl: 2 }, totalStock: 27, price: 250000 
  },
  { 
    id: 'P-004', name: 'Baju Bayi Set', imgSrc: 'https://placehold.co/40x40/F7FAFC/4A5568?text=Bb', 
    gender: 'Female', ageCategory: 'Bayi', productType: 'T-shirt',
    stockDetails: { s: 50, m: 0, l: 0, xl: 0 }, totalStock: 50, price: 90000 
  },
];
// Update data dengan totalStock yang benar
mockProductItems.forEach(item => {
  item.totalStock = calculateTotalStock(item.stockDetails);
});
// --- END MOCK DATA ---


// Format currency (misal: Rp 150.000)
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

// --- Komponen Utama Halaman Produk ---
export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Item Library');
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State untuk dialog

  // --- State untuk Form Dialog ---
  const [name, setName] = useState('');
  const [gender, setGender] = useState<Gender | ''>('');
  const [ageCategory, setAgeCategory] = useState<AgeCategory | ''>('');
  const [productType, setProductType] = useState<ProductType | ''>('');
  const [price, setPrice] = useState(0);
  const [stockS, setStockS] = useState(0);
  const [stockM, setStockM] = useState(0);
  const [stockL, setStockL] = useState(0);
  const [stockXL, setStockXL] = useState(0);
  const [image, setImage] = useState<File | null>(null);

  // Logika untuk filter pencarian
  const filteredItems = useMemo(() => {
    if (!searchTerm) return mockProductItems;
    return mockProductItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const tabs = ['Item Library', 'Modifiers', 'Categories', 'Discounts', 'Taxes'];

  // Fungsi untuk menangani submit form
  const handleCreateItem = (e: React.FormEvent) => {
    e.preventDefault();
    
    const stockDetails: StockDetails = {
      s: stockS,
      m: stockM,
      l: stockL,
      xl: stockXL,
    };
    
    const totalStock = calculateTotalStock(stockDetails);

    const newItem = {
      name,
      gender,
      ageCategory,
      productType,
      price,
      stockDetails,
      totalStock,
      image: image ? image.name : 'no-image', // Simulasi
    };

    // Di aplikasi nyata, Anda akan mengirim 'newItem' ini ke backend
    console.log("Creating new item:", newItem);

    // Reset form dan tutup dialog
    setIsDialogOpen(false);
    setName('');
    setGender('');
    setAgeCategory('');
    setProductType('');
    setPrice(0);
    setStockS(0);
    setStockM(0);
    setStockL(0);
    setStockXL(0);
    setImage(null);
  };

  return (
    // <main> ini adalah 'children' yang akan dimasukkan ke app/dashboard/layout.tsx
    <main className="flex-1 overflow-y-auto p-4 md:p-6">
      
      {/* Header Halaman */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Items</h1>
        
        {/* --- TOMBOL DIALOG CREATE ITEM --- */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
              <Plus className="h-5 w-5 mr-2" />
              Create Item
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
            <form onSubmit={handleCreateItem}>
              <DialogHeader>
                <DialogTitle>Tambah Item Baru</DialogTitle>
                <DialogDescription>
                  Isi detail produk di bawah ini sesuai alur yang ditentukan.
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                
                {/* Kolom Kiri */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="gender">1. Gender</Label>
                    <Select onValueChange={(value: Gender) => setGender(value)} value={gender}>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Pilih Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="ageCategory">2. Kategori Umur</Label>
                    <Select onValueChange={(value: AgeCategory) => setAgeCategory(value)} value={ageCategory}>
                      <SelectTrigger id="ageCategory">
                        <SelectValue placeholder="Pilih Kategori Umur" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Dewasa">Dewasa</SelectItem>
                        <SelectItem value="Remaja">Remaja</SelectItem>
                        <SelectItem value="Anak">Anak</SelectItem>
                        <SelectItem value="Bayi">Bayi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="productType">3. Jenis Produk</Label>
                    <Select onValueChange={(value: ProductType) => setProductType(value)} value={productType}>
                      <SelectTrigger id="productType">
                        <SelectValue placeholder="Pilih Jenis Produk" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="T-shirt">T-shirt</SelectItem>
                        <SelectItem value="Celana">Celana</SelectItem>
                        <SelectItem value="Kemeja">Kemeja</SelectItem>
                        {/* Tambahkan jenis produk lain di sini */}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Kolom Kanan */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">4. Nama Produk</Label>
                    <Input
                      id="name"
                      placeholder="Contoh: Kemeja Pria Polos"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Harga (IDR)</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Contoh: 150000"
                      value={price || ''}
                      onChange={(e) => setPrice(parseInt(e.target.value) || 0)}
                      required
                    />
                  </div>
                  <div>
                    <Label>Stok per Ukuran (Total akan dihitung otomatis)</Label>
                    <div className="grid grid-cols-4 gap-2 mt-1">
                      <Input type="number" placeholder="S" value={stockS || ''} onChange={(e) => setStockS(parseInt(e.target.value) || 0)} />
                      <Input type="number" placeholder="M" value={stockM || ''} onChange={(e) => setStockM(parseInt(e.target.value) || 0)} />
                      <Input type="number" placeholder="L" value={stockL || ''} onChange={(e) => setStockL(parseInt(e.target.value) || 0)} />
                      <Input type="number" placeholder="XL" value={stockXL || ''} onChange={(e) => setStockXL(parseInt(e.target.value) || 0)} />
                    </div>
                  </div>
                   <div>
                    <Label htmlFor="image">Gambar Produk</Label>
                    <Input
                      id="image"
                      type="file"
                      onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                      className="file:text-sm file:font-medium file:text-blue-700 file:bg-blue-50 hover:file:bg-blue-100"
                    />
                  </div>
                </div>

              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Batal
                  </Button>
                </DialogClose>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Simpan Produk
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        {/* --- END DIALOG --- */}

      </div>

      {/* Navigasi Tab */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex -mb-px space-x-6">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-1 text-sm font-medium transition-colors
                ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Search Bar */}
      <div className="mt-4 mb-4">
        <div className="relative w-full max-w-sm">
          <Input
            placeholder="Search product name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* --- TABEL PRODUK (DIMODIFIKASI) --- */}
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50 dark:bg-gray-800">
            <TableRow>
              <TableHead className="w-[50px] px-4">
                <Checkbox />
              </TableHead>
              <TableHead className="min-w-[250px]">Product Name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Age Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Total Stock</TableHead>
              <TableHead>Price (IDR)</TableHead>
              <TableHead className="w-[50px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map(item => (
              <TableRow key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <TableCell className="px-4">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={item.imgSrc} alt={item.name} />
                      <AvatarFallback>
                        {item.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span>{item.name}</span>
                  </div>
                </TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.ageCategory}</TableCell>
                <TableCell>{item.productType}</TableCell>
                <TableCell>{item.totalStock} pcs</TableCell>
                <TableCell className="font-medium text-green-600">
                  {formatCurrency(item.price)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>View Stock Details</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
            {filteredItems.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="text-center h-24 text-gray-500">
                  No products found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* --- END TABEL --- */}


      {/* Pagination (Mock) */}
      <div className="flex items-center justify-end space-x-4 py-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center space-x-2">
          <span>Rows per page:</span>
          <Button variant="outline" size="sm" className="px-2 py-1 h-8">
            15 <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div>
          1-{filteredItems.length} of {mockProductItems.length}
        </div>
        {/* Di sini Anda akan menambahkan tombol navigasi pagination (Previous, Next) */}
      </div>
    </main>
  );
}

