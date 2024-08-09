
const itemsData = {
    'Nurses Items': [
      { name: 'Band-Aid', image: 'https://cdn-icons-png.flaticon.com/512/3304/3304663.png' },
      { name: 'Gauze', image: 'https://static.vecteezy.com/system/resources/previews/015/284/509/original/hand-drawn-gauze-bandage-illustration-png.png' },
      { name: 'Gown', image: 'https://www.shamron.com/application/files/2615/6346/4721/Patient_Gown_Side_Tie_401.jpg' },
      { name: 'Syringe', image: 'https://png.pngtree.com/png-clipart/20220109/original/pngtree-cartoon-hand-painted-cute-needle-syringe-medical-material-hospital-injection-png-image_7028532.png' },
      { name: 'Gloves', image: 'https://static.vecteezy.com/system/resources/previews/015/285/125/original/hand-drawn-medical-gloves-illustration-png.png' },
      { name: 'Mask', image: 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2pvYjcyOC0wMTYtcC5wbmc.png' },
      { name: 'Stethoscope', image: 'https://i.pinimg.com/474x/fa/67/5f/fa675fe575fe6ce61f3a38b054c79259.jpg' },
      { name: 'Thermometer', image: 'https://i.pinimg.com/736x/1c/e7/fa/1ce7fa24204f7b314cf2ac479da6a79a.jpg' },
      { name: 'Scissors', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDTVc1BBY0tV_GyibSJNrTjO4qSnFlXRAxQg&s' },
      { name: 'Tape', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkNjLE7XUzJwQ3GseEFtUNpPDNtwJ7ZGKcA&s' },
    ],
    Medicines: [
      { name: 'Aspirin', image: 'https://www.niddk.nih.gov/media-assets/12438/N00201-H_thumbnail.jpg?imbypass=true' },
      { name: 'Ibuprofen', image: 'https://www.niddk.nih.gov/media-assets/12617/N01765-H.jpg?imbypass=true' },
      { name: 'Antibiotic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMw28hhjvF-jsC7GaEY4gqdDFknRuxdvlSg&s' },
      { name: 'Antiseptic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kbW0y1FbDBVViesZddAbZr0wjfwyTpqOnA&s' },
      { name: 'Cough Syrup', image: 'https://i.etsystatic.com/45003490/r/il/7bc992/5170864918/il_fullxfull.5170864918_7qhw.jpg' },
      { name: 'Pain Reliever', image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-pain-reliever-tablets-csa-images.jpg' },
      { name: 'Vitamins', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3NxqA9uO7JF4iAi614BLCq0HWGaxd9eeXw&s' },
      { name: 'Epinephrine', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpEfm9h4WJ9hWGTNv8z8OcixaG59snKFC4A&s' },
      { name: 'MineCraft Potion', image: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1b/Uncraftable_Splash_Potion_JE2.png/revision/latest/scale-to-width/360?cb=20191027041434' },
      { name: 'Ointment', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DvmehuqCF3nLJYouK7AQ8w2OaulWd8K-oQ&s' },
    ],
    Equipment: [
      { name: 'Difribulator', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfU8yHwY49ATwlqL00OYA5PKqk4RItan_oA&s' },
      { name: 'X-Ray Machine', image: 'https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-3d-x-ray-machine-png-image_11532236.png' },
      { name: 'Heart Monitor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CTkvEKyAd5edevd01e6rJJJ0t1wTYajkJw&s' },
      { name: 'Blood Pressure Cuff', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5pczGWCTaYRl84shGblGxVCxaZyNTkqHf8w&s' },
      { name: 'IV Stand', image: 'https://c8.alamy.com/comp/W3G3N0/medical-health-stand-iv-bag-W3G3N0.jpg' },
      { name: 'Syringe Pump', image: 'https://cdn.dribbble.com/users/4031/screenshots/2249248/media/3abc44b097e29f9048cad77cb9638171.png?resize=400x300&vertical=center' },
      { name: 'Wheelchair', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRez22RyfHATOEKql_YsQKKpNA6iOH5gVqxRw&s' },
      { name: 'Gurney', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TZwshDJZ8McWUcJAOPIg-fdmEC_gUbPLlA&s' },
      { name: 'Hazmat Suit', image: 'https://preview.redd.it/iwc8xkxv67t71.jpg?width=554&format=pjpg&auto=webp&s=d2907cd18cbc5de3f7c4e6c2cccf3e7a576a4b0b' },
      { name: 'Oxygen Tank', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvCfVlWs1wua5wxZTJhfEOaNMF-NBiJpN2w&s' },
    ],
    Food: [
      { name: 'Apple', image: 'https://ih1.redbubble.net/image.5171963254.2981/raf,360x360,075,t,fafafa:ca443f4786.jpg' },
      { name: 'Sandwich', image: 'https://storage.ko-fi.com/cdn/useruploads/post/8def090f-d330-421e-862b-865e6aa76f54_idiotsandwich.png' },
      { name: 'Orange', image: 'https://content.imageresizer.com/images/memes/Annoying-Orange-meme-10.jpg' },
      { name: 'Banana', image: 'https://i.imgflip.com/82tgcq.png' },
      { name: 'Cookie', image: 'https://cdn.prod.website-files.com/646218c67da47160c64a84d5/6463468980a208f3afa61504_59.png' },
      { name: 'Chips', image: 'https://preview.redd.it/c908hpiymy321.png?width=828&format=png&auto=webp&s=d2883e01268876217c1730c750b31bbc70d0e6cc' },
      { name: 'Soda', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMroIPGPkREXihZp8tGqnd0lcqEris2SwtA&s' },
      { name: 'Juice', image: 'https://i.kym-cdn.com/entries/icons/facebook/000/009/986/Cactus_juice_XDDD_by_muh_Q.jpg' },
      { name: 'Milk', image: 'https://i.redd.it/rj7s5omw9zr61.jpg' },
      { name: 'Water', image: 'https://content.imageresizer.com/images/memes/Spongebob-drinking-water-meme-10.jpg' },
    ],
  };
  
  export default itemsData;
  
  