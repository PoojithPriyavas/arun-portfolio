import { useEffect } from 'react';

function ReelEmbed({ link }) {
  useEffect(() => {
    // This ensures Instagram's embed JS is loaded
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [link]);

  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={link}
        data-instgrm-version="14"
        style={{ height: '100%', margin: 'auto',width:'auto' }}
      ></blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
}

export default ReelEmbed;
