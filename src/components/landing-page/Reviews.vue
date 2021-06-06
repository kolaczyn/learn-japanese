<template>
  <div class="wide-container">
    <ul class="container">
      <li :key="name" v-for="({ content, name, avatar }, idx) in reviews">
        <review-card
          :class="idx % 2 ? 'odd' : 'even'"
          class="review-card"
          :content="content"
          :name="name"
          :avatar="avatar"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard.vue';

export default {
  components: {
    'review-card': ReviewCard,
  },
  data() {
    return {
      reviews: [
        {
          content: 'Have been working with CSS for over ten years and Tailwind just makes my.',
          name: 'Jad Limcaco',
          avatar: 'https://randomuser.me/api/portraits/men/61.jpg',
        },
        {
          content:
            'After finally getting to use @tailwindcss on a real client project in the last two.',
          name: 'Don Flamingo',
          avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
        },
        {
          content:
            "Usually though, you'll want every prop to be a specific type of value. In these cases, you can list props as an object",
          name: 'Ben Award',
          avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
        },
        {
          content:
            'With Attack on Titan Season 2 just round the corner, what better way to catch up than watching this completely',
          name: 'Iron Jacked',
          avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
          content: 'lorem ipsum dolor something random i dunno.',
          name: 'Tomato Girl',
          avatar: 'https://randomuser.me/api/portraits/women/69.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.wide-container {
  padding: 2rem 3rem;
  margin: 0 auto;
}
.container {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  transition: transform 100s;
  transform: translateX(-100%);
}
.even {
  transform: rotate(2deg);
}
.odd {
  transform: rotate(-2deg);
}
.review-card {
  transition: transform 120ms ease-in;
  &:hover {
    transform: rotate(0);
  }
}
</style>
