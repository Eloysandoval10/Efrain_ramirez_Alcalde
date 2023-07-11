import "./style/Video.css";

const Video = () => {
  return (
    <section className="product__slider">
      <iframe
      className="fff"
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fandresfdez27%2Fvideos%2F604911241729965%2F&show_text=false&width=560&t=0"
        width="500"
        height="314"
        // style="border:none;overflow:hidden"
        scrolling="no"
        // frameborder="0"
        // allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        // allowFullScreen="true"
      ></iframe>
      {/* <iframe
        className="fff"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fandresfdez27%2Fposts%2Fpfbid02PJmydYatehwMRTx2MvjKKCR9EN8DwYTzAMRr1TfqRwdFdRv72U18VNaBJVMLBJeJl&show_text=false&width=500"
        width="500"
        // height="auto"
        // style="border:none;overflow:hidden"
        scrolling="no"
        // frameborder="0"
        // allowfullscreen="true"
        // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe> */}
      {/* <iframe
      className="fff"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fefrain.ramireznieto%2Fposts%2Fpfbid0tLTzKR7g3KxAJCXHwAE58VP7gjZqy9sugJLpc3osee9BCm33W9ZFnDHmEYxeXM37l&show_text=false&width=500"
        width="500"
        height="281"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe> */}
    </section>
  );
};

export default Video;
