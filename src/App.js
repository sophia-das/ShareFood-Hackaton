import React, { useState, useEffect } from 'react';
import FoodDonationForm from './components/FoodDonationForm';
import { 
  User, 
  Store, 
  Home, 
  Heart, 
  UserCheck, 
  Tractor,
  Plus, 
  Clock, 
  BarChart3, 
  Package,
  Gift,
  Truck,
  Users,
  MapPin,
  Route,
  AlertTriangle,
  Calendar,
  TrendingUp,
  Map,
  DollarSign,
  FileText,
  Settings,
  Bell,
  MessageCircle,
  LogOut,
  Menu,
  X,
  Star,
  Zap,
  Shield
} from 'lucide-react';

const FoodManagementSystem = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [showTasksMenu, setShowTasksMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New pickup request available", type: "info" },
    { id: 2, message: "Food expires in 2 hours!", type: "warning" }
  ]);
  const [showDonationForm, setShowDonationForm] = useState(false);

  // Sample task data for volunteers
  const volunteerTasks = [
    {
      id: 1,
      restaurant: "Burger Palace",
      restaurantAddress: "123 Main St, Downtown",
      ngo: "Hope Foundation",
      ngoAddress: "456 Oak Ave, Eastside",
      foodType: "Mixed Meals",
      quantity: 15,
      unit: "kg",
      foodImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
      pickupDistance: 2.3,
      deliveryDistance: 4.7,
      totalDistance: 7.0,
      urgency: "High",
      pickupTime: "2:00 PM - 3:00 PM",
      estimatedTime: "45 mins",
      status: "Available"
    },
    {
      id: 2,
      restaurant: "Pizza Corner",
      restaurantAddress: "789 Pizza Blvd, Midtown",
      ngo: "Children's Shelter",
      ngoAddress: "321 Pine St, Westside",
      foodType: "Pizza & Bread",
      quantity: 8,
      unit: "kg",
      foodImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      pickupDistance: 1.8,
      deliveryDistance: 3.2,
      totalDistance: 5.0,
      urgency: "Medium",
      pickupTime: "4:00 PM - 5:00 PM",
      estimatedTime: "30 mins",
      status: "Available"
    },
    {
      id: 3,
      restaurant: "Healthy Bites",
      restaurantAddress: "555 Green St, Uptown",
      ngo: "Senior Care Center",
      ngoAddress: "777 Elm St, Northside",
      foodType: "Fresh Vegetables",
      quantity: 12,
      unit: "kg",
      foodImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
      pickupDistance: 3.5,
      deliveryDistance: 2.8,
      totalDistance: 6.3,
      urgency: "Low",
      pickupTime: "6:00 PM - 7:00 PM",
      estimatedTime: "40 mins",
      status: "Available"
    }
  ];

  const goBack = () => {
    const prev = [...history];
    const lastPage = prev.pop();
    if (lastPage) {
      setCurrentPage(lastPage);
      setHistory(prev);
    }
  };
  
  const BackButton = () =>
    history.length > 0 ? (
      <button
        onClick={goBack}
        className="fixed top-4 left-4 bg-white p-2 rounded-full border shadow hover:bg-gray-100 z-50"
      >
        ← Back
      </button>
    ) : null;
 
  // Landing Page Component
  const LandingPage = () => (
    <div 
      className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(220, 248, 237, 0.8), rgba(183, 247, 205, 0.8))`,
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">FoodShare</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
              <a href="#impact" className="text-gray-600 hover:text-green-600 transition-colors">Impact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              End Food Waste,
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Feed Hope</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect restaurants, households, NGOs, and volunteers in a seamless ecosystem to reduce food waste 
              and fight hunger through intelligent food redistribution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setHistory(prev => [...prev, currentPage]);
                  setCurrentPage('auth');
                }}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Now
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-1/4 left-10 animate-pulse">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Store className="w-8 h-8 text-green-600 mb-2" />
            <p className="text-sm font-medium">1000+ Restaurants</p>
          </div>
        </div>
        <div className="absolute top-1/3 right-10 animate-pulse delay-75">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Heart className="w-8 h-8 text-red-500 mb-2" />
            <p className="text-sm font-medium">50K+ Meals Saved</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">About Us</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
            Our Food Waste Management System is built to solve two urgent problems—food wastage and hunger.
            It bridges the gap between food donors like households and restaurants and those in need through NGOs and volunteers.
            Leveraging technology, we ensure safe, timely, and efficient redistribution of excess food, helping build a zero-waste future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-green-50 rounded-lg shadow hover:shadow-md transition">
              <Heart className="mx-auto text-green-600 mb-4 w-10 h-10" />
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">To eliminate food waste and hunger by creating a tech-powered food-sharing network.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow hover:shadow-md transition">
              <Users className="mx-auto text-green-600 mb-4 w-10 h-10" />
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Inclusive Community</h3>
              <p className="text-gray-600">We connect restaurants, households, NGOs, farmers, and volunteers for shared impact.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow hover:shadow-md transition">
              <Zap className="mx-auto text-green-600 mb-4 w-10 h-10" />
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Smart Tech</h3>
              <p className="text-gray-600">Use of AI-routing, smart storage, and expiry alerts ensures efficiency and safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Store, title: "Restaurant Management", desc: "Smart surplus tracking and discount scheduling" },
              { icon: Home, title: "Household Donations", desc: "Easy leftover food donation with pickup tracking" },
              { icon: Heart, title: "NGO Distribution", desc: "Efficient food request and volunteer management" },
              { icon: Route, title: "Smart Routing", desc: "AI-optimized delivery routes for volunteers" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
                <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  // Authentication Component
  const AuthPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-4">
      <BackButton />
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Join FoodShare</h2>
          <p className="text-gray-600 mt-2">Choose your role to get started</p>
        </div>

        <div className="space-y-4">
          {[
            { role: 'restaurant', icon: Store, title: 'Restaurant', desc: 'Manage surplus food and discounts' },
            { role: 'household', icon: Home, title: 'Household', desc: 'Donate leftover food easily' },
            { role: 'ngo', icon: Heart, title: 'NGO', desc: 'Request and distribute food' },
            { role: 'volunteer', icon: UserCheck, title: 'Volunteer', desc: 'Help with pickups and delivery' },
            { role: 'farmer', icon: Tractor, title: 'Farmer', desc: 'Sell crops and find storage' }
          ].map((option) => (
            <button
              key={option.role}
              onClick={() => {
                setUserRole(option.role);
                setIsAuthenticated(true);
                setCurrentPage('dashboard');
              }}
              className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <option.icon className="w-8 h-8 text-gray-600 group-hover:text-green-600" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Dashboard Header Component
  const DashboardHeader = () => (
    <header className="bg-white shadow-sm border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={goBack}
            className="p-2 rounded-full border shadow hover:bg-gray-100"
          >
            ←
          </button>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <h1 className="text-2xl font-bold text-gray-900 capitalize">{userRole} Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.length}
            </span>
          </div>
          <MessageCircle className="w-6 h-6 text-gray-600 cursor-pointer hover:text-green-600" />
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium text-gray-900 capitalize">{userRole}</span>
          </div>
        </div>
      </div>
    </header>
  );

  // Sidebar Component
  const Sidebar = () => {
    const menuItems = {
      restaurant: [
        { icon: Plus, label: 'Add Food Listing', id: 'add-food' },
        { icon: Clock, label: 'Schedule Discounts', id: 'schedule' },
        { icon: BarChart3, label: 'Surplus Reports', id: 'reports' },
        { icon: Package, label: 'Storage Monitor', id: 'storage' }
      ],
      household: [
        { icon: Gift, label: 'Donate Food', id: 'donate' },
        { icon: Truck, label: 'Track Pickup', id: 'track' }
      ],
      ngo: [
        { icon: Users, label: 'Request Food', id: 'request' },
        { icon: UserCheck, label: 'Assign Volunteers', id: 'assign' },
        { icon: BarChart3, label: 'Distribution Stats', id: 'stats' }
      ],
      volunteer: [
        { icon: MapPin, label: 'Available Tasks', id: 'tasks' },
        { icon: Route, label: 'Route Optimizer', id: 'route' },
        { icon: AlertTriangle, label: 'Emergency Alerts', id: 'alerts' }
      ],
      farmer: [
        { icon: Calendar, label: 'Register Crops', id: 'crops' },
        { icon: TrendingUp, label: 'Demand Forecast', id: 'forecast' },
        { icon: Map, label: 'Find Storage', id: 'find-storage' },
        { icon: DollarSign, label: 'Marketplace', id: 'marketplace' },
        { icon: FileText, label: 'Government Aid', id: 'aid' }
      ]
    };

    return (
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 border-b border-gray-800">
          <Heart className="w-8 h-8 text-green-500 mr-2" />
          <span className="text-xl font-bold text-white">FoodShare</span>
        </div>
        
        <nav className="mt-8">
          {menuItems[userRole]?.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.id === 'tasks' && userRole === 'volunteer') {
                  setShowTasksMenu(!showTasksMenu);
                }
              }}
              className="w-full flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
          
          <div className="border-t border-gray-800 mt-8 pt-4">
            <button className="w-full flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </button>
            <button 
              onClick={() => {
                setIsAuthenticated(false);
                setUserRole(null);
                setCurrentPage('landing');
              }}
              className="w-full flex items-center px-6 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </nav>
      </aside>
    );
  };

  // Dashboard Content Component
  const DashboardContent = () => {
    const stats = {
      restaurant: [
        { label: 'Food Items Listed', value: '156', icon: Package, color: 'green' },
        { label: 'Surplus Reduced', value: '23%', icon: TrendingUp, color: 'blue' },
        { label: 'Storage Used', value: '67%', icon: BarChart3, color: 'purple' }
      ],
      household: [
        { label: 'Donations Made', value: '24', icon: Gift, color: 'green' },
        { label: 'Families Helped', value: '89', icon: Heart, color: 'red' },
        { label: 'Active Pickups', value: '3', icon: Truck, color: 'blue' }
      ],
      ngo: [
        { label: 'Food Requests', value: '45', icon: Users, color: 'green' },
        { label: 'Active Volunteers', value: '23', icon: UserCheck, color: 'blue' },
        { label: 'Meals Distributed', value: '1,234', icon: Heart, color: 'red' }
      ],
      volunteer: [
        { label: 'Available Tasks', value: '12', icon: MapPin, color: 'green' },
        { label: 'Completed Deliveries', value: '89', icon: Truck, color: 'blue' },
        { label: 'Emergency Alerts', value: '2', icon: AlertTriangle, color: 'red' }
      ],
      farmer: [
        { label: 'Registered Crops', value: '8', icon: Tractor, color: 'green' },
        { label: 'Active Contracts', value: '3', icon: FileText, color: 'blue' },
        { label: 'Storage Bookings', value: '5', icon: Package, color: 'yellow' }
      ]
    };

    return (
      <main className="flex-1 p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {stats[userRole]?.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userRole === 'restaurant' && (
              <>
                <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"onClick={() => setShowDonationForm(true)}>
                  <Plus className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-green-800">Add Food</span>
                </button>
                <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-blue-800">Schedule Deal</span>
                </button>
              </>
            )}
            {userRole === 'volunteer' && (
              <>
                <button 
                  onClick={() => setShowTasksMenu(true)}
                  className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-green-800">View Tasks</span>
                </button>
                <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors" onClick={() => window.location.href = '/tracking.html'}>
                  <Route className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-sm font-medium text-blue-800">Optimize Route</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Food donation completed</p>
                  <p className="text-sm text-gray-600">5 kg rice donated to local NGO</p>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  };

  // Main Dashboard Layout
  const Dashboard = () => (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <DashboardContent />
      </div>
      
      {/* Volunteer Tasks Dropdown Menu */}
      {showTasksMenu && userRole === 'volunteer' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Available Tasks</h2>
              <button
                onClick={() => setShowTasksMenu(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {volunteerTasks.map((task) => (
                <div key={task.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Food Image */}
                    <div className="lg:w-48 h-32 rounded-lg overflow-hidden bg-gray-100">
                      <img 
                        src={task.foodImage} 
                        alt={task.foodType}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Food+Image';
                        }}
                      />
                    </div>
                    
                    {/* Task Details */}
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{task.foodType}</h3>
                          <p className="text-lg font-medium text-green-600">{task.quantity} {task.unit}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            task.urgency === 'High' ? 'bg-red-100 text-red-800' :
                            task.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {task.urgency} Priority
                          </span>
                          <p className="text-sm text-gray-600 mt-1">{task.estimatedTime}</p>
                        </div>
                      </div>
                      
                      {/* Route Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Store className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="font-semibold text-blue-900">Pickup from</span>
                          </div>
                          <p className="font-medium text-gray-900">{task.restaurant}</p>
                          <p className="text-sm text-gray-600">{task.restaurantAddress}</p>
                          <div className="flex items-center mt-2">
                            <MapPin className="w-4 h-4 text-blue-600 mr-1" />
                            <span className="text-sm font-medium text-blue-800">{task.pickupDistance} km away</span>
                          </div>
                          <p className="text-sm text-gray-600">Pickup: {task.pickupTime}</p>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            <Heart className="w-5 h-5 text-green-600 mr-2" />
                            <span className="font-semibold text-green-900">Deliver to</span>
                          </div>
                          <p className="font-medium text-gray-900">{task.ngo}</p>
                          <p className="text-sm text-gray-600">{task.ngoAddress}</p>
                          <div className="flex items-center mt-2">
                            <MapPin className="w-4 h-4 text-green-600 mr-1" />
                            <span className="text-sm font-medium text-green-800">{task.deliveryDistance} km from pickup</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Total Distance and Action */}
                      <div className="flex justify-between items-center pt-4 border-t">
                        <div className="flex items-center text-gray-600">
                          <Route className="w-5 h-5 mr-2" />
                          <span className="font-medium">Total Distance: {task.totalDistance} km</span>
                        </div>
                        <div className="flex gap-3">
                          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            View Route
                          </button>
                          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                            Accept Task
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {volunteerTasks.length === 0 && (
                <div className="text-center py-12">
                  <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks available</h3>
                  <p className="text-gray-600">Check back later for new delivery opportunities!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {showDonationForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowDonationForm(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <FoodDonationForm />
          </div>
        </div>
      )}

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );

  // Main App Render
  return (
    <div className="font-sans">
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'auth' && <AuthPage />}
      {currentPage === 'dashboard' && isAuthenticated && <Dashboard />}
    </div>
  );
};

export default FoodManagementSystem;