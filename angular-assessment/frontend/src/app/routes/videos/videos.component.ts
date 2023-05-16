import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Video } from 'src/app/models/user.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videos: any;
  videoSelected!: Video;
  bookmarks!: any[];

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  constructor(private taskService: TaskService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.taskService.getVideos().subscribe((val: any)=> {
      console.log(val["videos"]);
      this.videos = val["videos"];
      this.videoSelected = this.videos[0];
      this.getBookmark();
    })

  }

  playVideo(video: Video) {
    this.videoSelected = video;
    console.log(this.videoSelected);
  }

  getBookmark() {
    this.taskService.getBookmark(this.videoSelected.id).subscribe((data: any) => {
      console.log(data.bookmarks);
      this.bookmarks = data.bookmarks;
    })
  }

  saveBookmark() {
    // const timestamp = new Date().getTime();
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      const timestamp = this.videoPlayer.nativeElement.currentTime;
      console.log(timestamp);
      // const formattedTime = this.datePipe.transform(timestamp * 1000, 'mm:ss');
      // console.log(formattedTime);
      this.taskService.saveBookmark(this.videoSelected.id, timestamp).subscribe(
      (data) => {
        console.log(data);
        this.getBookmark();
      },
      (err) => {
        console.log(err);
      });
    }
  }

  play(timestamp: any) {
    this.videoPlayer.nativeElement.currentTime = timestamp;
    this.videoPlayer.nativeElement.play();
  }
}
