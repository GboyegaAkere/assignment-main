import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-stretch gap-4">

   
          <div className="border border-gray-800 rounded-md py-6 px-4 h-[82px] flex items-center justify-center md:justify-start flex-1 w-full">
            <p className="text-gray-400 text-center md:text-left text-sm">
              © 2025, All Rights Reserved. Built by{' '}
              <a
                href="https://framerxplore.com"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oluwagboyega
              </a>
            </p>
          </div>

      
          <div className="w-full md:w-auto flex justify-center md:justify-end flex-wrap gap-2">
            <a
              href="https://www.linkedin.com/in/akeremale-oluwagboyega-2801572a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[72px] h-[82px] bg-black border border-gray-800 rounded-md flex items-center justify-center transition-colors"
            >
              <FaLinkedin className="text-blue-500 md:text-white md:hover:text-blue-500" size={45} />
            </a>
            <a
              href="https://x.com/gboyesweb?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[72px] h-[82px] bg-black border border-gray-800 rounded-md flex items-center justify-center transition-colors"
            >
              <FaTwitter className="text-pink-500 md:text-white md:hover:text-pink-500" size={45} />
            </a>
            <a
              href="https://github.com/GboyegaAkere"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[72px] h-[82px] bg-black border border-gray-800 rounded-md flex items-center justify-center transition-colors"
            >
              <FaGithub className="text-gray-400 md:text-white md:hover:text-gray-400" size={45} />
            </a>
            <a
              href="https://www.facebook.com/share/1Hym8SCsUG/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[72px] h-[82px] bg-black border border-gray-800 rounded-md flex items-center justify-center transition-colors"
            >
              <FaFacebook className="text-blue-600 md:text-white md:hover:text-blue-600" size={45} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
