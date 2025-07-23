export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-4">
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Your Company</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi, laudantium eveniet dolorem
          </p>
        </div>

        <div>
          <h4 className="text-md font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Support</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold text-white mb-4">Subscribe</h4>
          <form>
            <input type="email" placeholder="Your email"
              className="w-full px-3 py-2 mb-3 rounded bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit"
              className="w-full inline-block bg-green-600 text-white font-light px-6 py-2 rounded hover:bg-green-800 transition">
                Subscribe
              </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        &copy; 2025 . All rights reserved.
      </div>
    </footer>
  );
}
