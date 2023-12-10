<template>
  <div class="category">
    <div class="category__item">
      <div
        :style="indent"
        @click="toggleChildren($event, node.id)"
        :class="hasChildrenClass(node)"
      >
        <i :class="[arrowClass(node), 'category__icon']"></i>
        <p class="category__name">{{ node.name }}</p>
        <button class="category__btn edit" @click.stop="editCategory(node)">
          <i class="fa fa-pencil category__icon"></i>
        </button>
        <button class="category__btn delete" @click.stop.prevent="deleteCategory(node.id)">
          <i class="fa fa-trash category__icon"></i>
        </button>
        <button class="category__btn add">
          <i class="fa fa-plus category__icon" @click.stop="addCategory(node)"></i>
        </button>
      </div>
      <transition-group name="fade">
        <template v-if="showChildren">
          <div v-for="child in node.children" :key="child.id">
            <tree
              :node="child"
              :depth="depth + 1"
              @delete-category="deleteCategory"
              @edit-category="editCategory"
              @add-category="addCategory"
            ></tree>
          </div>
        </template>
      </transition-group>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    node: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
    },
  },
  name: 'Tree',
  data() {
    return {
      showChildren: false,
    };
  },
  computed: {
    indent() {
      return { paddingLeft: `${this.depth * 10}px` };
    },
  },
  methods: {
    arrowClass(node) {
      return {
        'fa fa-chevron-right': !this.showChildren && node.children,
        'fa fa-chevron-down': this.showChildren && node.children,
      };
    },
    hasChildrenClass(node) {
      return node.children ? 'has-children category__wrapper' : 'category__wrapper';
    },
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
    editCategory(category) {
      this.$emit('edit-category', category);
    },
    addCategory(category) {
      this.$emit('add-category', category);
    },
    deleteCategory(id) {
      this.$emit('delete-category', id);
    },
  },
};
</script>

<style scoped lang="scss">
button {
  outline: none;
}
.category {
  &__icon {
    transition: transform .3s ease;
    color: #1F314D;
    padding: 4px 8px;

    &--down {
      transform: rotate(90deg);
    }
  }

  &__name {
    text-transform: uppercase;
    padding-left: 6px;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    height: 30px;
    color: #1F314D;
    border-bottom: 1px solid #1F314D;

    &.has-children {
      cursor: pointer;
    }
  }

  &__btn {
    width: 24px;
    height: 24px;
    background-color: transparent;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
  }
}
</style>
