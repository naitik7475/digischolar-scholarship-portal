// loginmodal.tsx
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiMail, HiLockClosed } from "react-icons/hi";

interface LoginModalProps {
  openModal: boolean;
  onCloseModal: () => void;
}

export function Component({ openModal, onCloseModal }: LoginModalProps) {
  const [email, setEmail] = useState<string>('');

  const handleClose = () => {
    onCloseModal();
    setEmail('');
  };

  return (
    <Modal show={openModal} size="md" onClose={handleClose} popup>
      <div className="relative rounded-lg bg-white p-4 shadow dark:bg-gray-800">
        {/* Gradient Header */}
        <div className="absolute inset-x-0 top-0 h-2 rounded-t-lg bg-gradient-to-r from-green-400 to-blue-500"></div>
        
        <Modal.Header className="border-0 pt-6">
          <h3 className="w-full text-center text-2xl font-bold text-gray-800 dark:text-white">
            Welcome to <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">DIGISCHOLAR</span>
          </h3>
        </Modal.Header>
        
        <Modal.Body className="py-4">
          <div className="space-y-6">
            {/* Email Input */}
            <div className="group relative">
              <Label htmlFor="email" value="Email" className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-300" />
              <div className="relative">
                <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
                <TextInput
                  id="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="group relative">
              <Label htmlFor="password" value="Password" className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-300" />
              <div className="relative">
                <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500" />
                <TextInput 
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 focus:border-blue-400 focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" className="text-blue-500 focus:ring-blue-400" />
                <Label htmlFor="remember" className="text-gray-600 dark:text-gray-300">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <Button 
              className="w-full rounded-lg bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 font-semibold 
                        text-white shadow-md transition-all hover:scale-[1.02] hover:from-green-500 hover:to-blue-600"
            >
              Sign In
            </Button>

            {/* Registration Prompt */}
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Not yet registered?{' '}
              <a href="#" className="font-semibold text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                Register now
              </a>
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}