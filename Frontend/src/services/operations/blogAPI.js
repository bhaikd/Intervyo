import { apiConnector } from "../apiConnector";
import { BASE_URL } from "../apis";

// Blog API calls
export const blogService = {
  // Get all blogs with filters
  async getBlogs({
    page = 1,
    limit = 12,
    search = "",
    tag = "",
    sort = "-publishedAt",
  } = {}) {
    try {
      const params = { page, limit, search, tag, sort };
      const response = await apiConnector("GET", `${BASE_URL}/blogs`, null, null, params);
      return response.data;
    } catch (error) {
       console.error("Error fetching blogs:", error);
       throw error;
    }
  },

  // Get featured blogs
  async getFeaturedBlogs() {
    try {
      const response = await apiConnector("GET", `${BASE_URL}/blogs/featured`);
      return response.data;
    } catch (error) {
      console.error("Error fetching featured blogs:", error);
      throw error;
    }
  },

  // Get popular tags
  async getTags() {
    try {
      const response = await apiConnector("GET", `${BASE_URL}/blogs/tags`);
      return response.data;
    } catch (error) {
      console.error("Error fetching tags:", error);
      throw error;
    }
  },

  // Get single blog
  async getBlog(slugOrId) {
    try {
      const response = await apiConnector("GET", `${BASE_URL}/blogs/${slugOrId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching blog:", error);
      throw error;
    }
  },

  // Create blog
  async createBlog(blogData) {
    const token = localStorage.getItem("token");
    try {
      const response = await apiConnector("POST", `${BASE_URL}/blogs`, blogData, {
        Authorization: `Bearer ${token}`,
      });
      return response.data;
    } catch (error) {
      console.error("Error creating blog:", error);
      throw error;
    }
  },

  // Update blog
  async updateBlog(id, blogData) {
    const token = localStorage.getItem("token");
    try {
      const response = await apiConnector("PUT", `${BASE_URL}/blogs/${id}`, blogData, {
        Authorization: `Bearer ${token}`,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating blog:", error);
      throw error;
    }
  },

  // Delete blog
  async deleteBlog(id) {
    const token = localStorage.getItem("token");
    try {
      const response = await apiConnector("DELETE", `${BASE_URL}/blogs/${id}`, null, {
        Authorization: `Bearer ${token}`,
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting blog:", error);
      throw error;
    }
  },

  // Like/Unlike blog
  async toggleLike(id) {
    const token = localStorage.getItem("token");
    try {
      const response = await apiConnector("POST", `${BASE_URL}/blogs/${id}/like`, null, {
        Authorization: `Bearer ${token}`,
      });
      return response.data;
    } catch (error) {
      console.error("Error toggling like:", error);
      throw error;
    }
  },

  // Add comment
  async addComment(blogId, content) {
    const token = localStorage.getItem("token");
    try {
      const response = await apiConnector(
        "POST",
        `${BASE_URL}/blogs/${blogId}/comments`,
        { content },
        {
          Authorization: `Bearer ${token}`,
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error adding comment:", error);
      throw error;
    }
  },

  // Delete comment
  async deleteComment(blogId, commentId) {
    const token = localStorage.getItem("token");
    try {
      const response = await apiConnector(
        "DELETE",
        `${BASE_URL}/blogs/${blogId}/comments/${commentId}`,
        null,
        {
          Authorization: `Bearer ${token}`,
        },
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting comment:", error);
      throw error;
    }
  },

  // Get user's blogs
  async getUserBlogs(userId, page = 1, limit = 10) {
    try {
      const params = { page, limit };
      const response = await apiConnector(
        "GET",
        `${BASE_URL}/users/${userId}/blogs`,
        null,
        null,
        params
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user blogs:", error);
      throw error;
    }
  },
};
