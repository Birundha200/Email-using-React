
import React, { useState, useEffect } from 'react';
import "./Listviewpage.css";
import image from "./images/abdul.jpeg";
import image1 from "./images/gandhii.jpeg";
import image2 from "./images/image3.jpeg";
import image4 from "./images/image5.jpeg";
import image5 from "./images/image6.jpeg";
import image6 from "./images/pencil.png";
import ComposeEmail from "./Compose email page";
import ImageContainer from './ImageContainerPage';
import personimage from "./images/dummyperson.png";
import flower1 from "./images/flower1.jpeg";

import DetailView from './DetailView';
import Card from './Card';

function ListviewPage() {
  const [data, setData] = useState([
    {
              name: 'APJ AbdulKalam',
              message: 'Avul Pakir Jainulabdeen Abdul Kalam BR was an Indian aerospace scientist,Avul Pakir Jainulabdeen Abdul Kalam was born on 15 October 1931, to a Tamil Muslim family in the pilgrimage centre of Rameswaram on Pamban Island, then in the Madras Presidency and now in the State of Tamil Nadu. His father Jainulabdeen Marakayar was a boat owner and imam of a local mosque;[9] his mother Ashiamma was a housewife.[10][11][12][13] His father owned a ferry that took Hindu pilgrims back and forth between Rameswaram and the now uninhabited Dhanushkodi.[14][15] Kalam was the youngest of four brothers and one sister in his family.[16][17][18] His ancestors had been wealthy Marakayar traders and landowners, with numerous properties and large tracts of land. Marakayar are a Muslim ethnic group found in coastal Tamil Nadu and Sri Lanka who claim descent from Arab traders and local women. The family business had involved trading groceries between the mainland and the island and to and from Sri Lanka, as well as ferrying pilgrims between the mainland and Pamban. With the opening of the Pamban Bridge to the mainland in 1914, however, the businesses failed and the family fortune and properties were lost by the 1920s, apart from the ancestral home. The family was poverty-stricken by the time Kalam was born. As a young boy he had to sell newspapers to add to the familys meager income. ',
              imageUrl: image,
              date: '11 September 2023',
              isUnread:true,
              to:"birundha.k@gmail.com"
            },
            {
              name: 'Mahatma Gandhi',
              message: "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world.Mohandas Karamchand Gandhi[pron 1] (2 October 1869 – 30 January 1948) was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world. The honorific Mahātmā (from Sanskrit 'great-souled, venerable'), first applied to him in South Africa in 1914, is now used throughout the world. Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in the law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years. It was here that Gandhi raised a family and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India and soon set about organising peasants, farmers, and urban labourers to protest against excessive land-tax and discrimination.",
              imageUrl: image1,
              date: '3 September 2023',
              isUnread:true,
              to:"birundha.k@gmail.com"
            },
            {
              name: 'Subhas Chandra Bose',
              message: 'Subhas Chandra Bose was an Indian nationalist,In April 1941 Bose arrived in Nazi Germany, where the leadership offered unexpected but equivocal sympathy for Indias independence.[19][20] German funds were employed to open a Free India Centre in Berlin. A 3,000-strong Free India Legion was recruited from among Indian POWs captured by Erwin Rommels Afrika Korps to serve under Bose.[21][j] Although peripheral to their main goals, the Germans inconclusively considered a land invasion of India throughout 1941. By the spring of 1942, the German army was mired in Russia and Bose became keen to move to southeast Asia, where Japan had just won quick victories.[23] Adolf Hitler during his only meeting with Bose in late May 1942 offered to arrange a submarine.[24] During this time, Bose became a father; his wife,[6][k] or companion,[25][l] Emilie Schenkl, gave birth to a baby girl.[6][m][19] Identifying strongly with the Axis powers, Bose boarded a German submarine in February 1943.[26][27] Off Madagascar, he was transferred to a Japanese submarine from which he disembarked in Japanese-held Sumatra in May 1943.[26]',
              imageUrl: image2,
              date: '23 October 2023',
              isUnread:true,
              to:"birundha.k@gmail.com"
            },
         
            {
              name: 'Conjeevaram Natarajan Annadurai',
              message: 'Conjeevaram Natarajan Annadurai was an Indian politician. He was Chief Minister of Tamil Nadu, South India from 1967 to 1969. He was the first member of a Dravidian Party to hold that chief minister post.[1]Annadurai was famous for his oration skills, dramas and literary works in Tamil. He was the first politician from the Dravidian parties to use Tamil cinema for political propaganda. Annadurai was born in a middle-class family. He first worked as a school teacher, then moved into the political field of the Madras Presidency as a journalist. He became a member of the Dravidar Kazhagam and a big follower of Periyar E. V. Ramasamy. But later Annadurai formed a new party named Dravida Munnetra Kazhagam due to differences between ideologies.',
              imageUrl: image4,
              date: '29 September 2023',
              isUnread:true,
              to:"birundha.k@gmail.com"
            },
            {
              name: 'Mahatma Gandhi',
              message: "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world.Mohandas Karamchand Gandhi[pron 1] (2 October 1869 – 30 January 1948) was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world. The honorific Mahātmā (from Sanskrit 'great-souled, venerable'), first applied to him in South Africa in 1914, is now used throughout the world. Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in the law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years. It was here that Gandhi raised a family and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India and soon set about organising peasants, farmers, and urban labourers to protest against excessive land-tax and discrimination.",
              imageUrl: image1,
              date: '3 September 2023',
              isUnread:true,
              to:"birundha.k@gmail.com",
            },
          
            {
              name: 'Jawaharlal Nehru',
              message: 'Nehru and the Congress dominated Indian politics during the 1930s. Nehru promoted the idea of the secular nation-state in the 1937 Indian provincial elections, allowing the Congress to sweep the elections, and to form governments in several provinces. In September 1939, the Congress ministries resigned to protest Viceroy Lord Linlithgows decision to join the war without consulting them. After the All India Congress Committees Quit India Resolution of 8 August 1942, senior Congress leaders were imprisoned and for a time the organisation was suppressed. Nehru, who had reluctantly heeded Gandhis call for immediate independence, and had desired instead to support the Allied war effort during World War II, came out of a lengthy prison term to a much altered political landscape. The Muslim League, under Muhammad Ali Jinnah, had come to dominate Muslim politics in the interim. In the 1946 provincial elections, Congress won the elections but the League won all the seats reserved for Muslims, which the British interpreted to be a clear mandate for Pakistan in some form. Nehru became the interim prime minister of India in September 1946, with the League joining his government with some hesitancy in October 1946.',
              imageUrl: image5,
              date: ' 17 September 2023',
              isUnread:true,
              to:"birundha.k@gmail.com"
            },
            {
              name: 'APJ AbdulKalam',
              message: 'Avul Pakir Jainulabdeen Abdul Kalam BR was an Indian aerospace scientist,Avul Pakir Jainulabdeen Abdul Kalam was born on 15 October 1931, to a Tamil Muslim family in the pilgrimage centre of Rameswaram on Pamban Island, then in the Madras Presidency and now in the State of Tamil Nadu. His father Jainulabdeen Marakayar was a boat owner and imam of a local mosque;[9] his mother Ashiamma was a housewife.[10][11][12][13] His father owned a ferry that took Hindu pilgrims back and forth between Rameswaram and the now uninhabited Dhanushkodi.[14][15] Kalam was the youngest of four brothers and one sister in his family.[16][17][18] His ancestors had been wealthy Marakayar traders and landowners, with numerous properties and large tracts of land. Marakayar are a Muslim ethnic group found in coastal Tamil Nadu and Sri Lanka who claim descent from Arab traders and local women. The family business had involved trading groceries between the mainland and the island and to and from Sri Lanka, as well as ferrying pilgrims between the mainland and Pamban. With the opening of the Pamban Bridge to the mainland in 1914, however, the businesses failed and the family fortune and properties were lost by the 1920s, apart from the ancestral home. The family was poverty-stricken by the time Kalam was born. As a young boy he had to sell newspapers to add to the familys meager income. ',
              imageUrl: image,
              date: '11 September 2023',
              isUnread:true,
              to:"birundha.k@gmail.com"
            },
            {
              name: 'Mahatma Gandhi',
              message: "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world.Mohandas Karamchand Gandhi[pron 1] (2 October 1869 – 30 January 1948) was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world. The honorific Mahātmā (from Sanskrit 'great-souled, venerable'), first applied to him in South Africa in 1914, is now used throughout the world. Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in the law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years. It was here that Gandhi raised a family and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India and soon set about organising peasants, farmers, and urban labourers to protest against excessive land-tax and discrimination.",
              imageUrl: image1,
              date: '3 September 2023',
              isUnread:true,
              to:"birundha.k@gmail.com"
            },
            {
              name: 'Subhas Chandra Bose',
              message: 'Subhas Chandra Bose was an Indian nationalist,In April 1941 Bose arrived in Nazi Germany, where the leadership offered unexpected but equivocal sympathy for Indias independence.[19][20] German funds were employed to open a Free India Centre in Berlin. A 3,000-strong Free India Legion was recruited from among Indian POWs captured by Erwin Rommels Afrika Korps to serve under Bose.[21][j] Although peripheral to their main goals, the Germans inconclusively considered a land invasion of India throughout 1941. By the spring of 1942, the German army was mired in Russia and Bose became keen to move to southeast Asia, where Japan had just won quick victories.[23] Adolf Hitler during his only meeting with Bose in late May 1942 offered to arrange a submarine.[24] During this time, Bose became a father; his wife,[6][k] or companion,[25][l] Emilie Schenkl, gave birth to a baby girl.[6][m][19] Identifying strongly with the Axis powers, Bose boarded a German submarine in February 1943.[26][27] Off Madagascar, he was transferred to a Japanese submarine from which he disembarked in Japanese-held Sumatra in May 1943.[26]',
              imageUrl: image2,
              date: '23 October 2023',
              isUnread:true,
              to:"birundha.k@gmail.com"
            },
            {
              name: 'Mahatma Gandhi',
              message: "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world.Mohandas Karamchand Gandhi[pron 1] (2 October 1869 – 30 January 1948) was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance to lead the successful campaign for India's independence from British rule. He inspired movements for civil rights and freedom across the world. The honorific Mahātmā (from Sanskrit 'great-souled, venerable'), first applied to him in South Africa in 1914, is now used throughout the world. Born and raised in a Hindu family in coastal Gujarat, Gandhi trained in the law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893 to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years. It was here that Gandhi raised a family and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India and soon set about organising peasants, farmers, and urban labourers to protest against excessive land-tax and discrimination.",
              imageUrl: image1,
              date: '3 September 2023',
              isUnread:true,
              to:"birundha.k@gmail.com"
            },
            {
              name: 'Subhas Chandra Bose',
              message: 'Subhas Chandra Bose was an Indian nationalist,In April 1941 Bose arrived in Nazi Germany, where the leadership offered unexpected but equivocal sympathy for Indias independence.[19][20] German funds were employed to open a Free India Centre in Berlin. A 3,000-strong Free India Legion was recruited from among Indian POWs captured by Erwin Rommels Afrika Korps to serve under Bose.[21][j] Although peripheral to their main goals, the Germans inconclusively considered a land invasion of India throughout 1941. By the spring of 1942, the German army was mired in Russia and Bose became keen to move to southeast Asia, where Japan had just won quick victories.[23] Adolf Hitler during his only meeting with Bose in late May 1942 offered to arrange a submarine.[24] During this time, Bose became a father; his wife,[6][k] or companion,[25][l] Emilie Schenkl, gave birth to a baby girl.[6][m][19] Identifying strongly with the Axis powers, Bose boarded a German submarine in February 1943.[26][27] Off Madagascar, he was transferred to a Japanese submarine from which he disembarked in Japanese-held Sumatra in May 1943.[26]',
              imageUrl: image2,
              date: '23 October 2023',
              isUnread:true,
              to:"birundha.k@gmail.com"
            },
       
  ]);

  const [selectedData, setSelectedData] = useState(null);
  const [showComposeEmail, setShowComposeEmail] = useState(false);
  const [showImageContainer, setShowImageContainer] = useState(false);
  

  useEffect(() => {
    const storedData = localStorage.getItem('emailData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('emailData', JSON.stringify(data));
  }, [data]);

  const handleItemClick = (index) => {
    const updatedData = [...data];
    updatedData[index].isUnread = false;
    setSelectedData(updatedData[index]);
    setData(updatedData);
  };

 

  const handleBackIconClick = () => {
    setSelectedData(null);
  };

  const handleComposeButtonClick = () => {
    setShowComposeEmail(true);
  };

  const addData = ({ name, to, subject, body, attachedImages }) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date().toLocaleDateString(undefined, options);

    const newData = {
      name: name,
      to: to,
      subject: subject,
      message: body,
      date: formattedDate,
      isUnread: true,
      imageUrl: personimage,flower1,
      attachedImages: attachedImages
    };

    setData((prevData) => [...prevData, newData]);
    setShowComposeEmail(false);
  };

  const deleteData = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    setSelectedData(null);
  };

  return (
    <div className="container">
      {showComposeEmail ? null : (
          <div className='header'>CATIE Mail Inbox</div>
      )}
      {!selectedData && !showComposeEmail && (
        <button className='compose-button' onClick={handleComposeButtonClick}>
          <img src={image6} className='pencil' alt="Compose" />
          Compose
        </button>
      )}

      {selectedData ? (
        <DetailView  
          data={selectedData} 
          onDelete={() => deleteData(data.indexOf(selectedData))} 
          onBackClick={handleBackIconClick}
        />
        
      ) : showComposeEmail ? (
        <ComposeEmail onSendEmail={addData} onClose={()=>setShowComposeEmail(false)}/>
      ) : showImageContainer ? (
        <ImageContainer onClose={() => setShowImageContainer(false)} />
      ) : (
        <div className="data-list">
          {data.map((item, index) => (
            <div key={index} className="list-item" onClick={() => handleItemClick(index)}>
              <Card
                name={item.name}
                message={item.message}
                imageUrl={item.imageUrl}
                date={item.date}
                isUnread={item.isUnread}
                attachedImages={item.attachedImages}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListviewPage;
