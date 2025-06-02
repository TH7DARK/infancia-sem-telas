
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Baby, PlayCircle, Video, Lightbulb, Heart, Menu, X, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import UserProfileModal from "./UserProfileModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { path: "/", icon: Baby, label: "Início" },
    { path: "/activities", icon: PlayCircle, label: "Brincadeiras" },
    { path: "/videos", icon: Video, label: "Vídeos" },
    { path: "/tips", icon: Lightbulb, label: "Dicas" },
    { path: "/favorites", icon: Heart, label: "Favoritos" },
  ];

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const openProfileModal = () => {
    setIsProfileModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Baby className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                PrimeiroPasso
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-blue-100 text-blue-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              
              {/* User Menu */}
              {user ? (
                <div className="flex items-center space-x-2 ml-4">
                  <Button
                    variant="ghost"
                    onClick={openProfileModal}
                    className="flex items-center space-x-2 px-3 py-2 hover:bg-blue-50 rounded-lg"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.profileImage} alt={user.name} />
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-sm">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-blue-600 font-medium">{user.name}</span>
                    <Settings className="h-4 w-4 text-blue-600" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleLogout}
                    className="text-gray-600 hover:bg-gray-100"
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              ) : (
                <Link to="/login">
                  <Button variant="outline" className="ml-4">
                    Entrar
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
                
                {/* Mobile User Menu */}
                {user ? (
                  <div className="pt-4 border-t border-gray-200">
                    <Button
                      variant="ghost"
                      onClick={openProfileModal}
                      className="w-full justify-start px-4 py-3 text-gray-600 hover:bg-gray-100"
                    >
                      <Avatar className="h-6 w-6 mr-2">
                        <AvatarImage src={user.profileImage} alt={user.name} />
                        <AvatarFallback className="bg-blue-100 text-blue-600 text-xs">
                          {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <span className="flex-1 text-left">{user.name}</span>
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={handleLogout}
                      className="w-full justify-start px-4 py-3 text-gray-600 hover:bg-gray-100"
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      Sair
                    </Button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-200">
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Entrar
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Profile Modal */}
      <UserProfileModal
        open={isProfileModalOpen}
        onOpenChange={setIsProfileModalOpen}
      />
    </>
  );
};

export default Navigation;
