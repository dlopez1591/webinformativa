const { createApp, ref } = Vue;

createApp({
  setup() {
    const cards = ref([
      {
        image: "./assets/images/card1.png",
        title: "Título de la Tarjeta 1",
        link: "URL-de-enlace-1",
        text: "Texto de la Tarjeta 1",
      },
      {
        image: "./assets/images/card2.png",
        title: "Título de la Tarjeta 2",
        link: "URL-de-enlace-2",
        text: "Texto de la Tarjeta 2",
      },
      {
        image: "./assets/images/card3.png",
        title: "Título de la Tarjeta 3",
        link: "URL-de-enlace-3",
        text: "Texto de la Tarjeta 3",
      },
      {
        image: "./assets/images/card1.png",
        title: "Título de la Tarjeta 4",
        link: "URL-de-enlace-4",
        text: "Texto de la Tarjeta 4",
      },
      // Agrega más tarjetas según sea necesario
    ]);

    const visibleCards = ref([]);
    let currentIndex = 0;

    const prevSlide = () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateVisibleCards();
      }
    };

    const nextSlide = () => {
      if (currentIndex < cards.value.length - 3) {
        currentIndex++;
        updateVisibleCards();
      }
    };

    const updateVisibleCards = () => {
      visibleCards.value = cards.value.slice(currentIndex, currentIndex + 3);
    };

    // Llama a la función de inicio
    updateVisibleCards();

    return {
      cards,
      visibleCards,
      prevSlide,
      nextSlide,
    };
  },
}).mount('#app');
