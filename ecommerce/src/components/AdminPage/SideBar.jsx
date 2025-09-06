import React from 'react'
import './Sidebar.css'
import analytics_icon from '../../assets/icons/chart-simple-solid-full.svg'
import users_icon from '../../assets/icons/user-solid-full.svg'
import ecommerce_icon from '../../assets/icons/bag-shopping-solid-full.svg'
import inventory_icon from '../../assets/icons/user-solid-full.svg'
import transactions_icon from '../../assets/icons/transactions-full-solid.svg'
import messages_icon from '../../assets/icons/message-solid-full.svg'
import reports_icon from '../../assets/icons/file-solid-full.svg'
import settings_icon from '../../assets/icons/gear-solid-full.svg'



function SideBar() {
  return (
    <div class="min-h-screen flex bg-gray-100">

  <aside class="w-64 bg-white dark:bg-gray-900 dark:border-gray-800">
    <div class="p-6">
      <h1 class="text-2xl font-semibold">Admin Dashboard</h1>
      <nav class="mt-6 space-y-2">
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200" ><img src={analytics_icon} className='icons'/> Analytics</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200"><img src={users_icon} className='icons'/> Users</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200"> <img src={ecommerce_icon} className='icons'/> E-Commerce</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200"> <img src={inventory_icon} className='icons'/> Inventory</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200"> <img src={transactions_icon} className='icons'/> Transactions</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200"> <img src={messages_icon} className='icons'/> Messages</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200"> <img src={reports_icon} className='icons'/> Reports</a>
        <a href="#" class="block px-4 py-2 rounded hover:bg-gray-200"> <img src={settings_icon} className='icons'/> Settings</a>
      </nav>
    </div>
  </aside>

  <main class="flex-1 p-6">
    <header class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-semibold">Overview</h2>
      <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Item</button>
    </header>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-4 rounded shadow dark:bg-gray-800">
        <h3 class="text-lg font-semibold">Total Revenue</h3>
        <p class="text-2xl mt-2">P 12,345.00</p>
        <p class="text-sm mt-2">+30.5% vs. Last Month</p>
      </div>
      <div class="bg-white p-4 rounded shadow dark:bg-gray-800">
        <h3 class="text-lg font-semibold">Total Orders</h3>
        <p class="text-2xl mt-2">P 12,345.00</p>
        <p class="text-sm mt-2">+30.5% vs. Last Month</p>
      </div>
      <div class="bg-white p-4 rounded shadow dark:bg-gray-800">
        <h3 class="text-lg font-semibold">Active Users</h3>
        <p class="text-2xl mt-2">15000</p>
        <p class="text-sm mt-2">+30.5% vs. Last Month</p>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-6 mt-8 h-70">
      <div class="bg-white p-4 rounded shadow dark:bg-gray-800">
        <h1 class="text-lg font-semibold">Revenue Overview</h1>
        <h4 class="text-sm">Monthly Revenue and Expenses</h4>
      </div>
      <div class="bg-white p-4 rounded shadow dark:bg-gray-800">
        <h3 class="text-lg font-semibold">Sales</h3>
        <p class="text-2xl mt-2">$23,456</p>
      </div>
    </div>
    <section class="mt-8">
      <div class="bg-white p-6 rounded shadow h-64 dark:bg-gray-800">
        <h1 class="text-lg font-semibold">Revenue Overview</h1>
        <h4 class="text-sm">Monthly Revenue and Expenses</h4>
      </div>
    </section >
    <section class="mt-8">
      <div class="bg-white p-6 rounded shadow h-64 dark:bg-gray-800">
      </div>
    </section>
  </main>
  </div>
  )
}

export default SideBar
