import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors/authSelector';
import { Comment } from 'src/app/shared/types/comment.interface';
import { CommentInput } from 'src/app/shared/types/commentInput.interface';
import { createCommentAction } from '../../store/actions/createComment.action';
import { deleteCommentAction } from '../../store/actions/deleteComment.action';
import { getCommentAction } from '../../store/actions/getComment.action';
import { commentSelector, errorSelector, isLoadingSelector } from '../../store/selectors/getCommentSelector';
import { CurrentUser } from './../../../shared/types/currentUser.interface';

@Component({
    selector: 'mc-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnChanges {
    @Input('slug') slugProps: string;
    form: FormGroup;

    currentUser$: Observable<CurrentUser>
    comments$: Observable<Comment[]>
    error$: Observable<string | null>
    isLoading$: Observable<boolean>
    isSubmitting$: Observable<boolean>

    constructor(private store: Store, private formBuilder: FormBuilder) { }

    // TODO: Atualização dos posts quando adicionar um novo ou remover

    ngOnInit(): void {
        this.createForm();
        this.initializeValues();
        this.fetchComments();
    }

    createForm(): void {
        this.form = this.formBuilder.group({
            body: ['', Validators.required],
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.fetchComments();
    }

    initializeValues(): void {
        this.comments$ = this.store.pipe(select(commentSelector));
        this.error$ = this.store.pipe(select(errorSelector));
        this.isLoading$ = this.store.pipe(select(isLoadingSelector));
        this.currentUser$ = this.store.pipe(select(currentUserSelector));
    }

    fetchComments(): void {
        this.store.dispatch(getCommentAction({ slug: this.slugProps }));
    }

    onSubmitPost(): void {
        if (this.form.valid) {
            const body: CommentInput = this.form.value
            this.store.dispatch(createCommentAction({ slug: this.slugProps, commentInput: body }));
        }
    }

    removeComment(commentId: number): void {
        this.store.dispatch(deleteCommentAction({ slug: this.slugProps, commentId: commentId }));
    }
}
