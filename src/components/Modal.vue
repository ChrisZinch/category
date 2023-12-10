<template>
  <transition name="modal">
    <div class="modal">
      <div class="modal__wrapper">
        <div class="modal__container">
          <h2 class="modal__title"> {{ modalTitle }} </h2>
          <div class="modal__form">
            <label for="name">New Name: </label>
            <input type="text" id="name" v-model="category.name" placeholder="Type new name">
            <div class="modal__buttons-container">
              <button class="modal__button modal__button--close" @click="$emit('close')">
                <span>Close</span>
              </button>
              <button class="modal__button modal__button--save" @click="submit">
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isEdit: {
      type: Boolean,
      required: true,
    },
    initialCategory: {
      type: Object,
    },
  },
  data() {
    return {
      category: {
        name: '',
        id: '',
      },
    };
  },
  computed: {
    modalTitle() {
      return this.isEdit ? 'Update category' : 'Create category';
    },
  },
  mounted() {
    if (this.isEdit) {
      this.category = { ...this.initialCategory };
    }
  },
  methods: {
    submit() {
      this.$emit('update', this.category);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;

  &__wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &__container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  &__title {
    margin: 0 auto;
  }

  &__form {
    display: flex;
    flex-direction: column;
    margin: 24px 0;

    label {
      text-align: left;
    }

    input {
      border: 1px solid grey;
      border-radius: 3px;
      outline: none;
      margin: 4px 0;
      padding: 6px;

      &:focus {
        border-color: lightgreen;
      }
    }
  }

  &__buttons-container {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
  }

  &__button {
    width: 100px;
    height: 28px;
    border-radius: 4px;
    border: 1px solid grey;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    position: relative;
    transition: border-color .5s ease-in-out;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 0%;
      height: 28px;
      border-radius: 3px;
      transition: all .5s ease-in-out;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }

    &--save {
      &::before {
        background-color: lightgreen;
      }
      &:hover {
        border-color: lightgreen;
      }
    }

    &--close {
      &::before {
        background-color: lightcoral;
      }

      &:hover {
        border-color: lightcoral;
      }
    }
  }
}
</style>
