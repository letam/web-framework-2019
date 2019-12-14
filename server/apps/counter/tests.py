from django.test import TestCase
import json


class APITestCase(TestCase):
    def test_get(self):
        """ Test GET request """
        count = 0
        response = self.client.get("/api/counter")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"count": count})

    def test_post(self):
        """ Test POST request """

        """ Get current count to compare with result after request """
        response = self.client.get("/api/counter")
        current_count = response.json()["count"]

        """ Test request """
        new_count = current_count + 1
        response = self.client.post(
            "/api/counter",
            data=json.dumps({"count": new_count}),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"count": new_count})

        """ Ensure that data retrieved from server after request is correct """
        response = self.client.get("/api/counter")
        self.assertEqual(response.json()["count"], new_count)

    def test_delete(self):
        """ Test DELETE request """

        """ Get current (non-0) count to compare with result after request """
        self.test_post()
        response = self.client.get("/api/counter")
        current_count = response.json()["count"]
        self.assertNotEqual(current_count, 0)

        """ Test request """
        response = self.client.delete("/api/counter")
        self.assertEqual(response.status_code, 204)

        """ Ensure that data retrieved from server after request is correct """
        response = self.client.get("/api/counter")
        self.assertEqual(response.json()["count"], 0)

    def test_post_without_acceptable_content_type_should_fail(self):
        """ Test POST request without acceptable content type """
        response = self.client.post("/api/counter")
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.content.decode(), "Content type must be 'application/json'")

    def test_post_without_body_should_fail(self):
        """ Test POST request without body """
        response = self.client.post("/api/counter", content_type="application/json")
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.content.decode(), "Request body is required")
