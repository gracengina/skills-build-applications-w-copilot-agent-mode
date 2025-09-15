from django.test import TestCase
from .models import User, Team, Activity, Leaderboard, Workout

class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create(name="Test", email="test@example.com", team="marvel")
        self.assertEqual(user.name, "Test")
        self.assertEqual(user.email, "test@example.com")
        self.assertEqual(user.team, "marvel")

class TeamModelTest(TestCase):
    def test_create_team(self):
        team = Team.objects.create(name="marvel", members=["test@example.com"])
        self.assertEqual(team.name, "marvel")
        self.assertIn("test@example.com", team.members)

class ActivityModelTest(TestCase):
    def test_create_activity(self):
        activity = Activity.objects.create(user="test@example.com", activity="Running", duration=30)
        self.assertEqual(activity.user, "test@example.com")
        self.assertEqual(activity.activity, "Running")
        self.assertEqual(activity.duration, 30)

class LeaderboardModelTest(TestCase):
    def test_create_leaderboard(self):
        lb = Leaderboard.objects.create(team="marvel", points=100)
        self.assertEqual(lb.team, "marvel")
        self.assertEqual(lb.points, 100)

class WorkoutModelTest(TestCase):
    def test_create_workout(self):
        workout = Workout.objects.create(user="test@example.com", workout="Pushup", reps=20)
        self.assertEqual(workout.user, "test@example.com")
        self.assertEqual(workout.workout, "Pushup")
        self.assertEqual(workout.reps, 20)
