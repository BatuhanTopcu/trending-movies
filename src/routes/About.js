import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="mainpad flex flex-col gap-4 py-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
          ABOUT US
        </h1>
        <p className="shippori p-4 bg-white rounded-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          posuere gravida arcu ut ultrices. Donec accumsan enim sit amet neque
          condimentum ullamcorper. Quisque id orci convallis, ultricies risus
          id, pulvinar sem. Cras sit amet lectus quis arcu auctor suscipit vitae
          iaculis nulla. Curabitur eu sem sit amet ligula laoreet convallis.
          Nulla facilisi. Vestibulum tincidunt nunc purus, eget imperdiet neque
          congue sed. Vivamus a efficitur turpis. Donec vitae nulla cursus,
          mollis purus ornare, pulvinar mauris. Nam vulputate non orci vitae
          porttitor. Suspendisse vitae nisi sed odio efficitur vehicula a at
          eros. Curabitur placerat tristique elementum. Sed luctus sapien eu
          facilisis dignissim.
        </p>

        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-green-600 to-pink-600">
          WHO WE ARE
        </h1>
        <p className="shippori p-4 bg-white rounded-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          posuere gravida arcu ut ultrices. Donec accumsan enim sit amet neque
          condimentum ullamcorper. Quisque id orci convallis, ultricies risus
          id, pulvinar sem. Cras sit amet lectus quis arcu auctor suscipit vitae
          iaculis nulla. Curabitur eu sem sit amet ligula laoreet convallis.
          Nulla facilisi. Vestibulum tincidunt nunc purus, eget imperdiet neque
          congue sed. Vivamus a efficitur turpis. Donec vitae nulla cursus,
          mollis purus ornare, pulvinar mauris. Nam vulputate non orci vitae
          porttitor. Suspendisse vitae nisi sed odio efficitur vehicula a at
          eros. Curabitur placerat tristique elementum. Sed luctus sapien eu
          facilisis dignissim.
        </p>
      </div>
    </Layout>
  );
}
