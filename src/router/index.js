import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Login from "@/components/Login.vue";
import NotebookList from "@/components/NotebookList.vue";
import NoteDetail from "@/components/NoteDetail.vue";
import TrashDetail from "@/components/TrashDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      alias: "/",
      component: Login
    },
    {
      path: "/notebooks",
      component: NotebookList
    },
    {
      path: "/note/:noteId",
      component: NoteDetail
    },
    {
      path: "/trash/:noteId",
      component: TrashDetail
    }
  ]
});
