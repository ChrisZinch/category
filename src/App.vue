<template>
  <div id="app">
    <h1>Category List</h1>
    <transition name="fade">
       <Modal
          v-if="showModal"
          :initialCategory="updateCategory"
          :isEdit="isEditCategory"
          @update="changeCategory"
          @close="closeModal"
        ></Modal>
    </transition>
    <div v-for="category of categoriesList" :key="category.name" class="container">
      <tree
        :node="category"
        :depth="0"
        @delete-category="updateList"
        @edit-category="openEditModal"
        @add-category="openAddModal"
      ></tree>
    </div>
  </div>
</template>

<script>
import Tree from './components/Tree.vue';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Tree,
    Modal,
  },
  data() {
    return {
      categoriesList: [
        {
          name: 'Cat1',
          id: '1',
          children: [
            {
              name: 'Cat1-1',
              id: '1-1',
              children: [
                {
                  name: 'Cat1-1-1',
                  id: '1-1-1',
                },
              ],
            },
          ],
        },
        {
          name: 'Cat2',
          id: '2',
          children: [
            {
              name: 'Cat2-1',
              id: '2-1',
            },
          ],
        },
        {
          name: 'Cat3',
          id: '3',
          children: [
            {
              name: 'Cat3-1',
              id: '3-1',
            },
            {
              name: 'Cat3-2',
              id: '3-2',
            },
            {
              name: 'Cat3-3',
              id: '3-3',
            },
          ],
        },
      ],
      lastClickedNodeId: null,
      showModal: false,
      updateCategory: null,
      isEditCategory: false,
      newChild: null,
    };
  },
  watch: {
    categoriesList: {
      handler() {
        localStorage.setItem('categories', JSON.stringify(this.categoriesList));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem('categories')) {
      try {
        this.categoriesList = JSON.parse(localStorage.getItem('categories'));
      } catch (e) {
        localStorage.removeItem('categories');
      }
    }
  },
  methods: {
    openAddModal(category) {
      this.updateCategory = category;
      this.showModal = true;
    },
    openEditModal(category) {
      this.updateCategory = category;
      this.isEditCategory = true;
      this.showModal = true;
    },
    changeCategory(payload) {
      if (this.isEditCategory) {
        this.findObjectById(payload, this.categoriesList);
      } else {
        this.newChild = payload;
        this.findObjectById(this.updateCategory, this.categoriesList);
      }

      this.closeModal();
    },
    closeModal() {
      this.showModal = false;
      this.isEditCategory = false;
      this.updateCategory = null;
    },
    findObjectById(category, array) {
      const stack = [...array]; // Create a stack with initial array

      while (stack.length) {
        const obj = stack.pop(); // Get the last element from the stack

        if (obj.id === category.id) {
          if (this.isEditCategory) {
            obj.name = category.name;
          } else {
            if (!obj.children) {
              obj.children = [];
            }

            obj.children.push({ name: this.newChild.name, id: `${obj.id}-${obj.children.length + 1}` });
          }

          return obj; // Found the object with the matching ID
        }

        if (obj.children && Array.isArray(obj.children)) {
          stack.push(...obj.children); // Add children to the stack
        }
      }

      return null; // Return null if object with ID is not found
    },
    updateList(idToDelete) {
      const updatedTree = this.deleteNodeById(this.categoriesList, idToDelete);

      this.categoriesList = updatedTree;
      this.lastClickedNodeId = idToDelete;
    },
    deleteNodeById(nodeList, idToDelete) {
      for (let i = 0; i < nodeList.length; i += 1) {
        const node = nodeList[i];

        if (node.id === idToDelete) {
          nodeList.splice(i, 1);

          return nodeList; // Node found and removed
        }

        if (node.children) {
          const updatedChildren = this.deleteNodeById(node.children, idToDelete);

          if (updatedChildren !== node.children) {
            node.children = updatedChildren;

            return nodeList; // Node updated with new children list
          }
        }
      }

      return nodeList; // Node not found, return original list
    },
  },
};
</script>

<style lang="scss">
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: 0.3s opacity ease-out;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
  position: relative;
}

h1 {
  color: #1F314D;
}

.container {
  width: 400px;
  margin: 0 auto;
}
</style>
