const additionalQuestions = [
    // Funny Questions
    { "question": "Would you rather have a pet dragon or a pet unicorn?", "options": ["Pet dragon", "Pet unicorn"] },
    { "question": "Would you rather have a permanent clown face or a permanent nose on your chin?", "options": ["Clown face", "Nose on chin"] },
    { "question": "Would you rather be able to breathe underwater or fly but only 1 foot off the ground?", "options": ["Breathe underwater", "Fly 1 foot off the ground"] },
    { "question": "Would you rather never be able to use a phone or never be able to use a computer?", "options": ["No phone", "No computer"] },
    { "question": "Would you rather wear your clothes inside out or backwards for a year?", "options": ["Inside out", "Backwards"] },
  
    // Clean Questions
    { "question": "Would you rather always have to wear bright yellow or always wear bright green?", "options": ["Bright yellow", "Bright green"] },
    { "question": "Would you rather only be able to communicate in rhymes or only be able to communicate in song lyrics?", "options": ["Communicate in rhymes", "Communicate in song lyrics"] },
    { "question": "Would you rather have a pause button or a rewind button for your life?", "options": ["Pause button", "Rewind button"] },
    { "question": "Would you rather have a photographic memory or be able to forget anything at will?", "options": ["Photographic memory", "Forget anything at will"] },
    { "question": "Would you rather have dinner with your favorite celebrity or go on a trip to your dream destination?", "options": ["Dinner with celebrity", "Trip to dream destination"] },
  
    // Couples Questions
    { "question": "Would you rather be the one to propose or be proposed to?", "options": ["Propose", "Be proposed to"] },
    { "question": "Would you rather argue with your significant other in public or in private?", "options": ["In public", "In private"] },
    { "question": "Would you rather be in a relationship where you never fight or where you fight often but always make up?", "options": ["Never fight", "Fight but make up"] },
    { "question": "Would you rather date someone who is always on time or always late but super affectionate?", "options": ["Always on time", "Always late but affectionate"] },
    { "question": "Would you rather have your partner sing you to sleep every night or read you a story?", "options": ["Sing you to sleep", "Read you a story"] },
  
    // Superpowers
    { "question": "Would you rather have the power of mind control or super speed?", "options": ["Mind control", "Super speed"] },
    { "question": "Would you rather be able to time travel or teleport?", "options": ["Time travel", "Teleport"] },
    { "question": "Would you rather always be able to tell the truth or always be able to tell when someone is lying?", "options": ["Tell the truth", "Tell when someone is lying"] },
    { "question": "Would you rather have telepathy or the ability to become invisible?", "options": ["Telepathy", "Become invisible"] },
    { "question": "Would you rather never be able to get a cold again or never feel tired again?", "options": ["Never get a cold", "Never feel tired again"] },
  
    // Animals
    { "question": "Would you rather be able to speak fluent cat or fluent dog?", "options": ["Fluent cat", "Fluent dog"] },
    { "question": "Would you rather live as an eagle or as a whale?", "options": ["Eagle", "Whale"] },
    { "question": "Would you rather be able to communicate with animals or be able to understand all languages?", "options": ["Communicate with animals", "Understand all languages"] },
    { "question": "Would you rather ride a lion or a bear?", "options": ["Ride a lion", "Ride a bear"] },
    { "question": "Would you rather be a giant hamster or a tiny rhino?", "options": ["Giant hamster", "Tiny rhino"] },
  
    // More Questions
    { "question": "Would you rather live without TV or without music?", "options": ["Without TV", "Without music"] },
    { "question": "Would you rather be able to talk to your past self or your future self?", "options": ["Talk to past self", "Talk to future self"] },
    { "question": "Would you rather never be able to speak again or always have to say everything that comes to your mind?", "options": ["Never speak again", "Always say everything"] },
    { "question": "Would you rather be the funniest person in the room or the most intelligent?", "options": ["Funniest person", "Most intelligent"] },
    { "question": "Would you rather explore space or explore the ocean?", "options": ["Explore space", "Explore the ocean"] },
  
    { "question": "Would you rather always know when someone is lying or always know what someone is thinking?", "options": ["Know when someone is lying", "Know what someone is thinking"] },
    { "question": "Would you rather have the ability to talk to animals or be able to predict the future?", "options": ["Talk to animals", "Predict the future"] },
    { "question": "Would you rather live in a treehouse or an underwater house?", "options": ["Treehouse", "Underwater house"] },
    { "question": "Would you rather win the lottery and never be able to work again or have your dream job but make an average salary?", "options": ["Win the lottery", "Dream job with average salary"] },
    { "question": "Would you rather live in a world without social media or in a world without movies?", "options": ["No social media", "No movies"] },
  
    { "question": "Would you rather have a personal chef or a personal stylist?", "options": ["Personal chef", "Personal stylist"] },
    { "question": "Would you rather always have to wear socks that don’t match or always wear shoes that are too tight?", "options": ["Mismatched socks", "Tight shoes"] },
    { "question": "Would you rather have to always sing instead of talk or dance instead of walk?", "options": ["Sing instead of talk", "Dance instead of walk"] },
    { "question": "Would you rather live without internet or without air conditioning?", "options": ["Without internet", "Without air conditioning"] },
    { "question": "Would you rather be able to see into the future but not change it, or change the past but not remember it?", "options": ["See the future", "Change the past"] },
  
    { "question": "Would you rather never feel tired again or never feel hungry again?", "options": ["Never feel tired", "Never feel hungry"] },
    { "question": "Would you rather only be able to eat sweet foods or only be able to eat salty foods?", "options": ["Sweet foods", "Salty foods"] },
    { "question": "Would you rather be able to see every movie before it’s released or get any book you want before it’s published?", "options": ["See movies early", "Get books early"] },
    { "question": "Would you rather be a famous movie star or a famous musician?", "options": ["Movie star", "Musician"] },
    { "question": "Would you rather have unlimited free time or unlimited money?", "options": ["Unlimited free time", "Unlimited money"] },
  
    { "question": "Would you rather always have to tell the truth or always lie?", "options": ["Always tell the truth", "Always lie"] },
    { "question": "Would you rather be able to talk to ghosts or be able to see into the future?", "options": ["Talk to ghosts", "See into the future"] },
    { "question": "Would you rather be stuck in an elevator with your worst enemy or with no one?", "options": ["With worst enemy", "With no one"] },
    { "question": "Would you rather be able to run at 100 mph or fly at 10 mph?", "options": ["Run at 100 mph", "Fly at 10 mph"] },
    { "question": "Would you rather live without your phone or without your friends?", "options": ["Without phone", "Without friends"] },
  
    // And a few more to round out the collection...
    { "question": "Would you rather be able to control the weather or control the tides?", "options": ["Control weather", "Control tides"] },
    { "question": "Would you rather be able to walk on the moon or live in the ocean?", "options": ["Walk on the moon", "Live in the ocean"] },
    { "question": "Would you rather fight 10 chickens the size of a horse or 1 horse the size of a chicken?", "options": ["10 chickens the size of a horse", "1 horse the size of a chicken"] },
    { "question": "Would you rather be able to fly but only indoors or be able to walk through walls but only outdoors?", "options": ["Fly indoors", "Walk through walls outdoors"] },
    { "question": "Would you rather be a king in the medieval era or a billionaire in the future?", "options": ["King in medieval era", "Billionaire in the future"] }
  ];
  
  function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * additionalQuestions.length);
    return additionalQuestions[randomIndex];
  }
  
  function loadQuestion() {
    const currentQuestion = getRandomQuestion();
    document.getElementById('questionText').textContent = currentQuestion.question;
    document.getElementById('option1Btn').textContent = currentQuestion.options[0];
    document.getElementById('option2Btn').textContent = currentQuestion.options[1];
    document.getElementById('responseText').textContent = "";
  }
  
  function handleAnswer(choice) {
    const responses = [
      "Interesting choice!",
      "You're not alone there!",
      "Nice pick!",
      "That's bold!",
      "Let's see another..."
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('responseText').textContent = randomResponse;
    setTimeout(loadQuestion, 2000);
  }
  
  document.getElementById('option1Btn').addEventListener('click', () => handleAnswer('option1'));
  document.getElementById('option2Btn').addEventListener('click', () => handleAnswer('option2'));
  
  window.onload = loadQuestion;
  