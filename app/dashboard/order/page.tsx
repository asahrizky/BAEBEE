"use client"; // Diperlukan untuk state (keranjang) dan hooks

import React, { useState, useMemo } from 'react';
import Link from 'next/link'; // Menggunakan Link asli dari Next.js
import {
  ShoppingCart, Search, Clock, X, SlidersHorizontal, ChevronDown,
  Tag, CreditCard, Plus, Trash2, Table, Calendar, ChevronRight
} from 'lucide-react';

// --- DEFINISI TIPE DATA (FIX) ---
// Mendefinisikan tipe untuk produk
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  imgSrc: string;
}

// Mendefinisikan tipe untuk item di keranjang (produk + kuantitas)
interface CartItem extends Product {
  quantity: number;
}
// --- END DEFINISI TIPE DATA ---


// Mock data for categories and products
// Di aplikasi nyata, ini akan diambil dari API
const categories = [
// ... (konten kategori tetap sama) ...
  { id: 'all', label: 'All Menu', count: 110 },
  { id: 'breads', label: 'Breads', count: 20 },
  { id: 'cakes', label: 'Cakes', count: 20 },
  { id: 'donuts', label: 'Donuts', count: 20 },
  { id: 'pastries', label: 'Pastries', count: 20 },
  { id: 'sandwich', label: 'Sandwich', count: 20 },
];

const mockProducts: Product[] = [ // (FIX) Menambahkan tipe Product[]
  { id: 1, name: 'Beef Crowich', category: 'Sandwich', price: 5.50, imgSrc: 'https://placehold.co/120x80/2980b9/ffffff?text=Beef+Crowich' },
  { id: 2, name: 'Buttermilk Croissant', category: 'Pastry', price: 4.00, imgSrc: 'https://placehold.co/120x80/f39c12/ffffff?text=Croissant' },
  { id: 3, name: 'Cereal Cream Donut', category: 'Donut', price: 2.45, imgSrc: 'https://placehold.co/120x80/e74c3c/ffffff?text=Donut' },
  { id: 4, name: 'Cheesy Cheesecake', category: 'Cake', price: 3.75, imgSrc: 'https://placehold.co/120x80/8e44ad/ffffff?text=Cheesecake' },
  { id: 5, name: 'Cheezy Sourdough', category: 'Bread', price: 4.50, imgSrc: 'https://placehold.co/120x80/2ecc71/ffffff?text=Sourdough' },
  { id: 6, name: 'Egg Tart', category: 'Tart', price: 3.25, imgSrc: 'https://placehold.co/120x80/3498db/ffffff?text=Egg+Tart' },
  { id: 7, name: 'Grains Pan Bread', category: 'Bread', price: 4.50, imgSrc: 'https://placehold.co/120x80/95a5a6/ffffff?text=Pan+Bread' },
  { id: 8, name: 'Spinchoco Roll', category: 'Pastry', price: 4.00, imgSrc: 'https://placehold.co/120x80/1abc9c/ffffff?text=Roll' },
  { id: 9, name: 'Sliced Black Forest', category: 'Cake', price: 4.50, imgSrc: 'https://placehold.co/120x80/d35400/ffffff?text=Black+Forest' },
  { id: 10, name: 'Solo Floss Bread', category: 'Bread', price: 4.50, imgSrc: 'https://placehold.co/120x80/c0392b/ffffff?text=Floss+Bread' },
  { id: 11, name: 'Zoguma Pan Bread', category: 'Bread', price: 4.50, imgSrc: 'https://placehold.co/120x80/7f8c8d/ffffff?text=Zoguma+Bread' },
];

// Format currency
const formatCurrency = (amount: number) => { // (FIX) Menambahkan tipe 'number'
  return amount.toFixed(2);
};


// --- Komponen Utama Halaman Order ---
// Ini adalah komponen yang akan dirender oleh app/dashboard/layout.tsx
export default function OrderPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // (FIX) Memberi tahu TypeScript bahwa state ini adalah array dari CartItem
  const [cart, setCart] = useState<CartItem[]>([]);

  // --- STATE FOR ORDER DETAILS ---
  const [customerName, setCustomerName] = useState('Customer\'s Name');
// ... (konten state tetap sama) ...
  const [table, setTable] = useState('Select Table');
  const [orderType, setOrderType] = useState('Order Type');
  const orderNumber = '#A000';
  const taxRate = 0.10; // 10%

  // --- CART LOGIC ---
  const addToCart = (product: Product) => { // (FIX) Menambahkan tipe 'Product'
    setCart(prevCart => {
      // (FIX) 'item' sekarang memiliki tipe CartItem
      const existingItem = prevCart.find(item => item.id === product.id); 
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // (FIX) Ini sekarang cocok dengan tipe CartItem
      return [...prevCart, { ...product, quantity: 1 }]; 
    });
  };

  const updateQuantity = (id: number, change: number) => { // (FIX) Menambahkan tipe
    setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
        // (FIX) 'item.id' dan 'item.quantity' sekarang dikenali
        item.id === id ? { ...item, quantity: item.quantity + change } : item
      ).filter(item => item.quantity > 0); // Remove if quantity becomes 0
      return updatedCart;
    });
  };

  // --- CALCULATIONS ---
  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);
// ... (konten kalkulasi tetap sama) ...
  const taxAmount = useMemo(() => subtotal * taxRate, [subtotal, taxRate]);

  const total = useMemo(() => subtotal + taxAmount, [subtotal, taxAmount]);

  // --- FILTERED PRODUCTS ---
  const filteredProducts = mockProducts.filter(product => {
// ... (konten filter tetap sama) ...
    const matchesCategory = selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    // <main> ini adalah 'children' yang akan dimasukkan ke app/dashboard/layout.tsx
    <main className="flex-1 overflow-y-auto p-4 md:p-6 flex space-x-6 h-full">
          
      {/* Kiri: Daftar Produk (2/3 Lebar) */}
      <Card className="flex flex-col w-2/3 h-full p-4">
        
        {/* Navigasi Kategori */}
        <div className="flex overflow-x-auto space-x-3 pb-3 border-b border-gray-200 dark:border-gray-700 mb-4">
{/* ... (konten kategori map tetap sama) ... */}
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm
                  ${isActive
                    ? 'bg-blue-600 text-white shadow-blue-500/50'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
              >
                {category.label}
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${isActive ? 'bg-white text-blue-600' : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-200'}`}>
                  {category.count} Items
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="mb-4">
{/* ... (konten search bar tetap sama) ... */}
          <Input
            placeholder="Search something sweet on your mind..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={Search}
            className="w-full"
          />
        </div>

        {/* Grid Produk */}
        <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pr-1">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="p-3 flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02]"
              onClick={() => addToCart(product)} // (FIX) 'product' sekarang memiliki tipe yang benar
            >
              <img
// ... (konten grid produk tetap sama) ...
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-24 object-cover rounded-lg mb-2"
                onError={(e) => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = "https://placehold.co/120x80/2980b9/ffffff?text=Product"; }}
              />
              <p className="text-sm font-semibold text-center mt-1 truncate w-full">{product.name}</p>
              <p className="text-xs text-gray-500 capitalize">{product.category}</p>
              <div className="mt-2 text-lg font-bold text-blue-600">${formatCurrency(product.price)}</div>
            </Card>
          ))}
          {filteredProducts.length === 0 && (
// ... (konten 'tidak ada produk' tetap sama) ...
            <div className="col-span-full text-center py-10 text-gray-500">
              Tidak ada produk ditemukan.
            </div>
          )}
        </div>

        {/* Tombol Track Order (Bottom Left Floating) */}
        {/* Catatan: Posisi 'absolute' ini mungkin perlu disesuaikan 
          tergantung pada tinggi layout utama Anda
        */}
        <div className="relative mt-4">
{/* ... (konten tombol track order tetap sama) ... */}
          <Button
            variant="primary"
            className="absolute -bottom-8 left-4 px-6 py-3 shadow-2xl shadow-blue-500/50 flex items-center gap-2"
          >
            <Plus className="h-5 w-5" /> Track Order
          </Button>
        </div>
        
      </Card>

      {/* Kanan: Cart/Pesanan (1/3 Lebar) */}
      <Card className="flex flex-col w-1/3 h-full p-4 dark:bg-gray-900 border-2 border-blue-500/30">
        
        {/* Order Header */}
        <div className="pb-3 border-b border-gray-200 dark:border-gray-700">
{/* ... (konten order header tetap sama) ... */}
            <p className="text-lg font-bold text-gray-800 dark:text-white">{customerName}</p>
            <p className="text-sm text-gray-500">Order Number: {orderNumber}</p>
        </div>

        {/* Dropdowns */}
        <div className="flex gap-2 mt-3 mb-4">
{/* ... (konten dropdown tetap sama) ... */}
          {/* Select Table Mock */}
          <div className="relative w-1/2">
            <Button variant="outline" className="w-full justify-between">
              <Table className="h-4 w-4 mr-2" />
              {table}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Order Type Mock */}
          <div className="relative w-1/2">
            <Button variant="outline" className="w-full justify-between">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              {orderType}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto space-y-3 p-1">
          {cart.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
{/* ... (konten 'no item' tetap sama) ... */}
              <ShoppingCart className="h-10 w-10 mx-auto mb-3" />
              <p>No Item Selected</p>
            </div>
          ) : (
            cart.map(item => ( // (FIX) 'item' sekarang bertipe CartItem
              <div key={item.id} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="flex flex-col">
{/* ... (konten item cart tetap sama) ... */}
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-500 capitalize">{item.category}</p>
                </div>
                <div className="flex items-center gap-2">
                    {/* Quantity Controls */}
                    <div className="flex items-center border rounded-lg bg-white dark:bg-gray-700">
                        <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-l-lg"
                        >
                            -
                        </button>
                        <span className="px-2 text-sm font-mono">{item.quantity}</span>
                        <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-r-lg"
                        >
                            +
                        </button>
                    </div>
                    <p className="text-sm font-semibold w-16 text-right">${formatCurrency(item.price * item.quantity)}</p>
                    <button onClick={() => updateQuantity(item.id, -item.quantity)} className="text-red-500 hover:text-red-700 p-1">
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer / Totals */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          
          {/* Subtotal & Tax */}
          <div className="space-y-1 mb-3 text-gray-700 dark:text-gray-300">
{/* ... (konten subtotal/tax tetap sama) ... */}
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>$ {formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax 10%</span>
              <span>$ {formatCurrency(taxAmount)}</span>
            </div>
          </div>

          {/* TOTAL */}
          <div className="flex justify-between items-center text-2xl font-bold border-t pt-3 mb-4 text-gray-900 dark:text-white">
{/* ... (konten total tetap sama) ... */}
            <span>TOTAL</span>
            <span>$ {formatCurrency(total)}</span>
          </div>

          {/* Promo and Payment */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-between text-gray-700 dark:text-gray-300 hover:bg-gray-100">
{/* ... (konten promo/payment tetap sama) ... */}
              <Tag className="h-4 w-4 mr-2" />
              Add Promo or Voucher
              <ChevronRight className="h-4 w-4 ml-auto" />
            </Button>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 justify-center text-gray-700 dark:text-gray-300">
                <CreditCard className="h-4 w-4 mr-2" />
                Payment Method
              </Button>
              <Button variant="primary" className="flex-1 justify-center bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                Place Order
              </Button>
            </div>
          </div>
        </div>

      </Card>
    </main>
  );
}


// --- MOCK SHADCN/UI COMPONENTS ---
// Di aplikasi nyata, Anda akan mengimpor ini dari @/components/ui/
// Saya letakkan di sini agar file ini bisa langsung berjalan.

const Button = ({ children, className = '', variant = 'default', size = 'default', onClick, asChild = false, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: string; size?: string }) => {
  let baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none shadow-md';
// ... (konten Button tetap sama) ...
  let variantClasses;
  let sizeClasses;

  switch (variant) {
    case 'outline':
      variantClasses = 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700';
      break;
    case 'ghost':
      variantClasses = 'hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300';
      break;
    case 'destructive':
      variantClasses = 'bg-red-600 text-white hover:bg-red-700';
      break;
    case 'primary': // Custom primary blue for main actions
      variantClasses = 'bg-blue-600 text-white hover:bg-blue-700';
      break;
    default:
      variantClasses = 'bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600';
  }

  switch (size) {
    case 'icon':
      sizeClasses = 'h-10 w-10 p-0';
      break;
    case 'sm':
      sizeClasses = 'h-9 px-3';
      break;
    case 'lg':
      sizeClasses = 'h-11 px-8';
      break;
    default:
      sizeClasses = 'h-10 px-4 py-2';
  }

  if (asChild) return <div className={className}>{children}</div>;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${className}`} {...props}>
    {children}
  </div>
);

const Input = ({ placeholder, type = 'text', className = '', value, onChange, icon: Icon, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ElementType }) => (
  <div className={`relative flex items-center ${className}`}>
    {Icon && <Icon className="absolute left-3 h-4 w-4 text-gray-400 dark:text-gray-500" />}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-50 dark:placeholder:text-gray-500 ${Icon ? 'pl-10' : ''}`}
      {...props}
    />
  </div>
);

// Komponen-komponen lain yang mungkin Anda perlukan (seperti Dropdown, Tooltip)
// akan diimpor dari @/components/ui/ di layout Anda (app/dashboard/layout.tsx)

